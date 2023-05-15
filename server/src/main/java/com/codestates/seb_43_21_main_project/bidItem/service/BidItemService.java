package com.codestates.seb_43_21_main_project.bidItem.service;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.repository.BidItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BidItemService {
    private final BidItemService bidItemService;
    private final BidItemRepository bidItemRepository;

    @PostMapping
    public BidItem createBidItem(BidItem bidItem) {

        bidItem.setCreatedDate(LocalDateTime.now());

        return bidItemRepository.save(bidItem);
    }

    @GetMapping("/{id}")
    public ResponseEntity<BidItem> getBidItem(@PathVariable Long id) {
        BidItem bidItem = bidItemService.getBidItem(id).getBody();
        return ResponseEntity.ok(bidItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BidItem> updateBidItem(@PathVariable Long id, @RequestBody BidItem bidItem) {
        BidItem updatedBidItem = bidItemService.updateBidItem(id, bidItem).getBody();
        return ResponseEntity.ok(updatedBidItem);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBidItem(@PathVariable Long id) {
        bidItemService.deleteBidItem(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<BidItem>> getAllBidItems() {
        List<BidItem> bidItems = (List<BidItem>) bidItemService.getAllBidItems();
        return ResponseEntity.ok(bidItems);
    }
}
