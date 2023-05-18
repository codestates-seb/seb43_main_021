package com.codestates.seb_43_21_main_project.bidItem.service;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.repository.BidItemRepository;
import com.codestates.seb_43_21_main_project.exception.BusinessLogicException;
import com.codestates.seb_43_21_main_project.exception.ExceptionCode;
import com.codestates.seb_43_21_main_project.image.entity.Image;
import com.codestates.seb_43_21_main_project.image.repository.ImageRepository;
import com.codestates.seb_43_21_main_project.image.utils.S3Uploader;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.service.MemberService;
import com.codestates.seb_43_21_main_project.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BidItemService {
    private final BidItemRepository bidItemRepository;
    private final MemberService memberService;
    private final AuctionService auctionService;
    private final CustomBeanUtils customBeanUtils;

    public BidItem createBidItem(Long memberId,
                                 Long auctionItemId,
                                 BidItem bidItem) {

        Member member = memberService.findMember(memberId);
        Auction auction = auctionService.findVerifiedAuction(auctionItemId);

        bidItem.setMember(member);
        bidItem.setAuction(auction);

        member.addBidItem(bidItem);
        auction.addBidItem(bidItem);

        return bidItemRepository.save(bidItem);
    }

    public BidItem updateBidItem(Long memberId,
                                 Long auctionItemId,
                                 BidItem bidItem) {

        BidItem findBidItem = findVerifiedBidItem(bidItem.getBidItemId());

        if (!findBidItem.getMember().getMemberId().equals(memberId)) {
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
        auctionService.findVerifiedAuction(auctionItemId);

        Optional.ofNullable(bidItem.getBidItemName())
                .ifPresent(bidItemName -> findBidItem.setBidItemName(bidItemName));

        Optional.ofNullable(bidItem.getBidItemContent())
                .ifPresent(bidItemContent -> findBidItem.setBidItemName(bidItemContent));

        BidItem updateBidItem = (BidItem) customBeanUtils.copyNonNullProperties(bidItem, findBidItem);


            return bidItemRepository.save(updateBidItem);
        }




    public void deleteBidItem(Long memberId,Long auctionItemId,Long bidItemId) {

        BidItem findBidItem = findVerifiedBidItem(bidItemId);

        if(!findBidItem.getMember().getMemberId().equals(memberId)){
            throw new BusinessLogicException(ExceptionCode.ACCESS_NOT_ALLOWED);
        }
        auctionService.findVerifiedAuction(auctionItemId);


        bidItemRepository.deleteById(bidItemId);
    }

    public BidItem findBidItem(Long bidItemId){
        return findVerifiedBidItem(bidItemId);
    }

    public List<BidItem> findBidItemList(Long memberId) {
        Member member = memberService.findMember(memberId);
        return bidItemRepository.findAllByMember(member);}

    private BidItem findVerifiedBidItem(Long bidItemId){
        Optional<BidItem> optionalBidItem = bidItemRepository.findById(bidItemId);
        BidItem findBidItem = optionalBidItem.orElseThrow(()->
                new RuntimeException("입찰 물품이 존재 하지 않습니다."));
        return findBidItem;
    }
}
