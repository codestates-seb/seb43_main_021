package com.codestates.seb_43_21_main_project.bidItem.controller;

import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPostDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.mapper.BidItemMapper;
import com.codestates.seb_43_21_main_project.bidItem.repository.BidItemRepository;
import com.codestates.seb_43_21_main_project.bidItem.service.BidItemService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(originPatterns = "http://localhost:8080")
@RestController
@RequestMapping("/bid_items")
@Slf4j
@Validated
public class BidItemController {
    private final BidItemRepository bidItemRepository;
    private final BidItemMapper bidItemMapper;
    private final BidItemService bidItemService;

    public BidItemController(BidItemRepository bidItemRepository, BidItemMapper bidItemMapper, BidItemService bidItemService) {
        this.bidItemRepository = bidItemRepository;
        this.bidItemMapper = bidItemMapper;
        this.bidItemService = bidItemService;
    }

    @PostMapping("/{auction_item_id}")
    public BidItem createBidItem(@PathVariable("auction_item_id") Long auctionItemId,
                                 @Valid @RequestBody BidItemPostDto bidItemPostDto) {

        BidItem bidItem = bidItemMapper.bidItemPostDtoToBidItem(bidItemPostDto);

        BidItem response = bidItemService.createBidItem(bidItem);

        return response ;//new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response), HttpStatus.CREATED);
    }

    @GetMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity<BidItem> getBidItem(@PathVariable Long id) {
        Optional<BidItem> optionalBidItem = bidItemRepository.findById(id);
        return optionalBidItem.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("")
    public List<BidItem> getBidItems() {
        return bidItemRepository.findAll();
    }

    @PatchMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity<BidItem> updateBidItem(@PathVariable Long id, @RequestBody BidItem updatedBidItem) {
        Optional<BidItem> optionalBidItem = bidItemRepository.findById(id);
        return optionalBidItem.map(bidItem -> {
            updatedBidItem.setBidItemId(bidItem.getBidItemId());
            bidItemRepository.save(updatedBidItem);
            return ResponseEntity.ok(updatedBidItem);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity<Void> deleteBidItem(@PathVariable Long id) {
        Optional<BidItem> optionalBidItem = bidItemRepository.findById(id);
        return optionalBidItem.map(bidItem -> {
            bidItemRepository.delete(bidItem);
            return ResponseEntity.ok().<Void>build();
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

}