package com.codestates.seb_43_21_main_project.auctionItem.service;

import com.codestates.seb_43_21_main_project.auctionItem.dto.PageInfoRequest;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.repository.AuctionRepository;
import com.codestates.seb_43_21_main_project.exception.BusinessLogicException;
import com.codestates.seb_43_21_main_project.exception.ExceptionCode;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.service.MemberService;
import com.codestates.seb_43_21_main_project.utils.ContextHolederUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.querydsl.QPageRequest;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuctionService {

    private final AuctionRepository auctionRepository;
    private final MemberService memberService;
    private final ContextHolederUtils contextHolederUtils;


    //    , MultipartFile auctionImage
    //물품 등록
    public Auction createAuction(Auction auction) {
        Long memberId = contextHolederUtils.getAuthMemberId(); //인증된 회원 ID
        Member member = memberService.findMember(memberId);
        auction.setMember(member);

        if (auction.getPeriod() > 30) { //        물품 등록시 기한 설정
            auction.setPeriod(30);
        }

        auction.setAuctionStatus(Auction.AuctionStatus.AUCTION_BIDDING); // 물품 상태 설정  : 입찰중

        Auction savedAuctionItem = auctionRepository.save(auction);
        return savedAuctionItem;

    }

    // 물품 수정
    public Auction updateAuction(Auction auction) {
        //존재하는 물건인지 검증
        Auction findAuction = findVerifiedAuction(auction.getAuctionItemId());
        Long memberId = contextHolederUtils.getAuthMemberId();
        if (!findAuction.getMember().getMemberId().equals(memberId)) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }

        //수정된 정보 업데이트
        Optional.ofNullable(auction.getName())
                .ifPresent(name -> findAuction.setName(name));

        if (auction.getPeriod() > 30) {
            auction.setPeriod(30);
        }
        Optional.ofNullable(auction.getPeriod())
                .ifPresent(period -> findAuction.setPeriod(period));

        Optional.ofNullable(auction.getContent())
                .ifPresent(content -> findAuction.setContent(content));


        //상태수정 (status) --> 메서드 만들기

        //수정된 정보 업데이트
        return auctionRepository.save(findAuction);
    }

    //물품 한개 조회
    public Auction findAuction(long auctionItemId) {
        return findVerifiedAuction(auctionItemId);
    }

    //자신이 등록한 물품 목록
    public List<Auction> findAllAuctions(long memberId) {
        Long authMemberId = contextHolederUtils.getAuthMemberId();
        Member member = memberService.findVerifiedmember(authMemberId);
        if(!member.getMemberId().equals(memberId)){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
        return auctionRepository.findAllByMember(member);
    }

//무한 스크롤
//    public Page<Auction> findAuctions(PageInfoRequest pageInfo) {
//        if (pageInfo.getLastItemId() <= 0 && pageInfo.getSize() <= 0) {
//            throw new BusinessLogicException(ExceptionCode.AUCTION_INTERNAL_SERVER_ERROR);
//        }
//        PageRequest pageRequest = PageRequest.ofSize(pageInfo.getSize()); //page : 0으로 고정
//        return auctionRepository.findByAuctionItemIdLessThanEqualOrderByAuctionItemIdDesc(pageInfo.getLastItemId(), pageRequest);
//    }
//

    //물품 전체 조회
    public List<Auction> findAuctions() {
        Sort sort = Sort.by(Sort.Direction.DESC, "createDate");
        return auctionRepository.findAll(sort);
    }


    //물품 하나 삭제
    public void deleteAuction(long auctionItemId) {
        Auction findAuction = findVerifiedAuction(auctionItemId);
        Long memberId = contextHolederUtils.getAuthMemberId();
        if (!findAuction.getMember().getMemberId().equals(memberId)) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
        findAuction.setDeleted(Boolean.TRUE); //해당 Id의 deleted 상태 변경
        auctionRepository.save(findAuction);

//        auctionRepository.delete(findAuction);
    }


    //물품 전체 삭제
    public void deleteAll() {
        List<Auction> auctions = auctionRepository.findAll();     //물품 전체를 찾아오기
        Long memberId = contextHolederUtils.getAuthMemberId();

        auctions.forEach(auction -> {
            if (!auction.getMember().getMemberId().equals(memberId)){
                throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
            }
            auction.setDeleted(Boolean.TRUE);
        });

        auctionRepository.saveAll(auctions); //saveAll()메서드로 여러 객체를 한번에 저장
    }


    public Auction findVerifiedAuction(long auctionItemId) {
        Optional<Auction> optionalAuction = auctionRepository.findById(auctionItemId);
        Auction findAuction = optionalAuction.orElseThrow(() -> new BusinessLogicException(ExceptionCode.AUCTION_NOT_FOUND));

        return findAuction;
    }

    private boolean isAuctionExpired(Auction auction, LocalDateTime current){
        LocalDateTime endDate = auction.getCreateDate().plusDays(auction.getPeriod()); // 경매 만료 = 시작일 + 기간
        return auction.getAuctionStatus() == Auction.AuctionStatus.AUCTION_BIDDING && endDate.isBefore(current);  //isBefore() : 파라미터값보다 과거
    }

    
//    @Scheduled(fixedDelay = 10000) //10초마다 실행
    @Scheduled(cron = "0 0 0 * * *") //매일 자정 12시에 실행
    public void ExpiredAuction(){
        LocalDateTime current = LocalDateTime.now();
        List<Auction> auctions = auctionRepository.findAll();

        for (Auction auction : auctions){
            if(isAuctionExpired(auction, current)){ //값이 true이면
                auction.setAuctionStatus(Auction.AuctionStatus.AUCTION_EXPIRATION); //상태 변경
                auctionRepository.save(auction);
                log.info("auction: {}" , auction);
            }
        }
    }
}

