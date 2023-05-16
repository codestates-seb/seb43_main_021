package com.codestates.seb_43_21_main_project.bidItem.service;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.repository.BidItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BidItemService {
    private final BidItemRepository bidItemRepository;

    public BidItem createBidItem(BidItem bidItem) {

        return bidItemRepository.save(bidItem);
    }

    public BidItem updateBidItem(BidItem bidItem) {

        BidItem findBidItem = findVerifiedBidItem(bidItem.getBidItemId());

        Optional.ofNullable(bidItem.getBidItemName())
                .ifPresent(bidItemName -> findBidItem.setBidItemName(bidItemName));

        Optional.ofNullable(bidItem.getBidItemContent())
                .ifPresent(bidItemContent -> findBidItem.setBidItemName(bidItemContent));

        return bidItemRepository.save(findBidItem);
    }


    public void deleteBidItem(long bidItemId) {

        bidItemRepository.deleteById(bidItemId);
    }

    public BidItem findBidItem(long bidItemId){
        return findVerifiedBidItem(bidItemId);
    }

    //public List<BidItem> findBidItems(long memberId) {
    //}

    private BidItem findVerifiedBidItem(long bidItemId){
        Optional<BidItem> optionalBidItem = bidItemRepository.findById(bidItemId);
        BidItem findBidItem = optionalBidItem.orElseThrow(()->
                new RuntimeException("입찰 물품이 존재 하지 않습니다."));
        return findBidItem;
    }
}
