package com.codestates.seb_43_21_main_project.auctionItem.service;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.repository.AuctionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuctionService {

    private final AuctionRepository auctionRepository;

    //물품 등록
    public Auction createAuction(Auction auction) {



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

        Optional.ofNullable(auction.getPeriod())
                .ifPresent(period -> findAuction.setPeriod(period));

        Optional.ofNullable(auction.getContent())
                .ifPresent(content -> findAuction.setContent(content));

        //카테고리를 이렇게 수정을 받는게 맞을까?
        Optional.ofNullable(auction.getCategoryId())
                .ifPresent(categoryId -> findAuction.setCategoryId(categoryId));
        
        //상태수정

        //수정된 정보 업데이트
        return auctionRepository.save(findAuction);
    }

    public Auction findAuction(long auctionItemId) {
        return findVerifiedAuction(auctionItemId);
    }

    public Page<Auction> findAuctions(int page, int size) {
        return  auctionRepository.findAll(PageRequest.of(page,size, Sort.by("auctionItemId").descending()));
    }

    public void deleteAuction(long auctionItemId) {
        Auction findAuction = findVerifiedAuction(auctionItemId);
        auctionRepository.delete(findAuction);
    }

    public void deleteAll() {
        auctionRepository.deleteAll();;
    }


    private Auction findVerifiedAuction(long auctionItemId) {
        Optional<Auction> optionalAuction = auctionRepository.findById(auctionItemId);
        Auction findAuction = optionalAuction.orElseThrow(() -> new RuntimeException());

        return findAuction;
    }



}
