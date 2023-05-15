package com.codestates.seb_43_21_main_project.bidItem.controller;

import com.codestates.seb_43_21_main_project.auctionItem.dto.PageInfoRequest;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPageInfoRequest;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPatchDto;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPostDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.mapper.BidItemMapper;
import com.codestates.seb_43_21_main_project.bidItem.repository.BidItemRepository;
import com.codestates.seb_43_21_main_project.bidItem.service.BidItemService;
import com.codestates.seb_43_21_main_project.dto.MultiResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
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
    public ResponseEntity createBidItem(@PathVariable("auction_item_id") Long auctionItemId,
                                 @Valid @RequestBody BidItemPostDto bidItemPostDto) {

        BidItem bidItem = bidItemMapper.bidItemPostDtoToBidItem(bidItemPostDto);

        BidItem response = bidItemService.createBidItem(bidItem);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response), HttpStatus.CREATED);
    }

    @GetMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity getBidItem(@PathVariable("auction_item_id") Long auctionItemId,
                                              @PathVariable("bid_item_id") Long bidItemId) {
        BidItem response = bidItemService.findBidItem(bidItemId);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response),HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity getBidItems(@Valid @RequestBody BidItemPageInfoRequest pageInfoRequest){
        Page<BidItem> pageBidItems = bidItemService.findBIdItems(pageInfoRequest);

        List<BidItem> bidItems = pageBidItems.getContent();

        return new ResponseEntity(
                new MultiResponseDto<>(bidItemMapper.bidItemToBidItemResponseDtos(bidItems),pageBidItems),HttpStatus.OK
        );
    }

    @PatchMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity updateBidItem(@PathVariable ("auction_item_id") Long auctionItemId,
                                        @PathVariable ("bid_item_id") Long bidItemId,
                                        @Valid @RequestBody BidItemPatchDto bidItemPatchDto) {
        bidItemPatchDto.setBidItemId(bidItemId);

        BidItem bidItem = bidItemMapper.bidItemPatchDtoToBidItem(bidItemPatchDto);

        BidItem response = bidItemService.updateBidItem(bidItem);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response),HttpStatus.OK);
    }

    @DeleteMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity deleteBidItem(@PathVariable ("auction_item_id") Long auctionItemId,
                                        @PathVariable ("bid_item_id") Long bidItemId ) {
        bidItemService.deleteBidItem(bidItemId);

        return ResponseEntity.noContent().build();
    }

}