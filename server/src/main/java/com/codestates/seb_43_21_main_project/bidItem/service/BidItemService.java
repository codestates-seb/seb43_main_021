package com.codestates.seb_43_21_main_project.bidItem.service;

import com.codestates.seb_43_21_main_project.auctionItem.dto.PageInfoRequest;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPageInfoRequest;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.repository.BidItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BidItemService {
    private final BidItemService bidItemService;
    private final BidItemRepository bidItemRepository;

    public BidItem createBidItem(BidItem bidItem) {

        bidItem.setCreatedDate(LocalDateTime.now());

        return bidItemRepository.save(bidItem);
    }

    public BidItem updateBidItem(BidItem bidItem) {

        BidItem findBidItem = findVerifiedBidItem(bidItem.getBidItemId());

        String bidItemName = bidItem.getBidItemName();
        if (bidItemName != null) findBidItem.setBidItemName(bidItemName);

        String bidItemContent = bidItem.getBidItemContent();
        if (bidItemContent != null) findBidItem.setBidItemContent(bidItemContent);

        findBidItem.setModifiedDate(LocalDateTime.now());
        findBidItem = bidItemRepository.save(findBidItem);

        return findBidItem;
    }


    public void deleteBidItem(Long bidItemID) {

        bidItemService.deleteBidItem(bidItemID);
    }

    public BidItem findBidItem(Long bidItemId){
        return findVerifiedBidItem(bidItemId);
    }

    public Page<BidItem> findBIdItems(BidItemPageInfoRequest bidItemPageInfoRequest) {

        if (bidItemPageInfoRequest.getBidItemLastItemId() <= 0 && bidItemPageInfoRequest.getSize() <= 0) {
            throw new RuntimeException("값을 입력해 주세요");
        }
        PageRequest pageRequest = PageRequest.ofSize(bidItemPageInfoRequest.getSize());
        return bidItemRepository.findBidItemAll(bidItemPageInfoRequest.getBidItemLastItemId(),pageRequest);
    }

    public BidItem findVerifiedBidItem(Long bidItemId){
        Optional<BidItem> optionalBidItem = bidItemRepository.findById(bidItemId);
        BidItem findBidItem = optionalBidItem.orElseThrow(()->
                new RuntimeException("입찰 물품이 존재 하지 않습니다."));
        return findBidItem;
    }
}
