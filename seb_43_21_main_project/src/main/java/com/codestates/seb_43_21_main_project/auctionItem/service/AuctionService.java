package com.codestates.seb_43_21_main_project.auctionItem.service;

import com.codestates.seb_43_21_main_project.auctionItem.dto.PageInfoRequest;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.repository.AuctionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuctionService {

    private final AuctionRepository auctionRepository;
    private final StorageService storageService;


    //    , MultipartFile auctionImage
    //물품 등록
    public Auction createAuction(Auction auction, MultipartFile auctionImage) {
//        물품 등록시 기한 설정
        if (auction.getPeriod() > 30) {
            auction.setPeriod(30);
        }

        storageService.store(auctionImage); // 이미지 로컬에 저장
        Auction savedAuctionItem = auctionRepository.save(auction);
        return savedAuctionItem;

    }

    // 물품 수정
    public Auction updateAuction(Auction auction) {
        //존재하는 물건인지 검증
        Auction findAuction = findVerifiedAuction(auction.getAuctionItemId());

        //수정된 정보 업데이트
        Optional.ofNullable(auction.getName())
                .ifPresent(name -> findAuction.setName(name));

        //기간설정 변경?
        Optional.ofNullable(auction.getPeriod())
                .ifPresent(period -> findAuction.setPeriod(period));

        Optional.ofNullable(auction.getContent())
                .ifPresent(content -> findAuction.setContent(content));


        //상태수정 (status)

        //수정된 정보 업데이트
        return auctionRepository.save(findAuction);
    }

    //물품 한개 조회
    public Auction findAuction(long auctionItemId) {
        return findVerifiedAuction(auctionItemId);
    }

    //물품 전체 조회
//    public Page<Auction> findAuctions(int page, int size) {
//        return  auctionRepository.findAll(PageRequest.of(page,size, Sort.by("auctionItemId").descending()));
//    }
    public Page<Auction> findAuctions(PageInfoRequest pageInfo) {
        //Todo :예외처리
        if (pageInfo.getLastItemId() < 1 && pageInfo.getSize() < 1) {
            throw new RuntimeException("양수 값을 입력해 주세요");
        }
        PageRequest pageRequest = PageRequest.ofSize(pageInfo.getSize()); //page : 0으로 고정
        return auctionRepository.findByAuctionItemIdLessThanEqualOrderByAuctionItemIdDesc(pageInfo.getLastItemId(), pageRequest);
    }


    //물품 하나 삭제
    public void deleteAuction(long auctionItemId) {
        Auction findAuction = findVerifiedAuction(auctionItemId);
        findAuction.setDeleted(Boolean.TRUE); //해당 Id의 deleted 상태 변경
        auctionRepository.save(findAuction);

//        auctionRepository.delete(findAuction);
    }


    //물품 전체 삭제
    public void deleteAll() {
        //물품 전체를 찾아오기
        List<Auction> auctions = auctionRepository.findAll();
        //리스트에서 하나씩 꺼내서 상태 변경
        auctions.forEach(auction -> auction.setDeleted(Boolean.TRUE));
        auctionRepository.saveAll(auctions); //saveAll()메서드로 여러 객체를 한번에 저장
    }

    private Auction findVerifiedAuction(long auctionItemId) {
        Optional<Auction> optionalAuction = auctionRepository.findById(auctionItemId);
        Auction findAuction = optionalAuction.orElseThrow(() -> new RuntimeException("경매 물품이 존재 하지 않습니다."));

        return findAuction;
    }

}
