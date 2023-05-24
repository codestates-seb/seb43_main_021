package com.codestates.seb_43_21_main_project.bidItem.controller;

import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPatchDto;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPostDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.mapper.BidItemMapper;
import com.codestates.seb_43_21_main_project.bidItem.service.BidItemService;
import com.codestates.seb_43_21_main_project.utils.ContextHolederUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/bid_items")
@Slf4j
@Validated
public class BidItemController {
    private final BidItemMapper bidItemMapper;
    private final BidItemService bidItemService;
    private final ContextHolederUtils contextHolederUtils;
    private final AuctionService auctionService;

    public BidItemController(BidItemMapper bidItemMapper, BidItemService bidItemService, ContextHolederUtils contextHolederUtils, AuctionService auctionService) {
        this.bidItemMapper = bidItemMapper;
        this.bidItemService = bidItemService;
        this.contextHolederUtils = contextHolederUtils;
        this.auctionService = auctionService;
    }

    @PostMapping("/{auction_item_id}")
    public ResponseEntity createBidItem(@PathVariable("auction_item_id") Long auctionItemId,
                                        @Valid @RequestBody BidItemPostDto bidItemPostDto) {

        Long memberId = contextHolederUtils.getAuthMemberId();

        BidItem bidItem = bidItemMapper.bidItemPostDtoToBidItem(bidItemPostDto);

        BidItem response = bidItemService.createBidItem(memberId,auctionItemId,bidItem);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response), HttpStatus.CREATED);
    }

    @GetMapping("/{bid_item_id}")
    public ResponseEntity getBidItem(@PathVariable("bid_item_id") Long bidItemId) {

        BidItem response = bidItemService.findBidItem(bidItemId);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response), HttpStatus.OK);
    }

    @GetMapping("/list/{member_id}")
    public ResponseEntity getBidItemListByMember(@PathVariable("member_id") Long memberId){

        List<BidItem> response = bidItemService.findBidItemList(memberId);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDtos(response),HttpStatus.OK);
    }

    @PatchMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity updateBidItem(@PathVariable ("auction_item_id") Long auctionItemId,
                                        @PathVariable ("bid_item_id") Long bidItemId,
                                        @Valid @RequestBody BidItemPatchDto bidItemPatchDto) {
        bidItemPatchDto.setBidItemId(bidItemId);
        Long memberId =contextHolederUtils.getAuthMemberId();

        BidItem bidItem = bidItemMapper.bidItemPatchDtoToBidItem(bidItemPatchDto);

        BidItem response = bidItemService.updateBidItem(memberId,auctionItemId,bidItem);

        return new ResponseEntity<>(bidItemMapper.bidItemToBidItemResponseDto(response),HttpStatus.OK);
    }

    @DeleteMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity deleteBidItem(@PathVariable ("auction_item_id") Long auctionItemId,
                                        @PathVariable ("bid_item_id") Long bidItemId ) {
        Long memberId = contextHolederUtils.getAuthMemberId();

        bidItemService.deleteBidItem(memberId,auctionItemId,bidItemId);

        return ResponseEntity.noContent().build();
    }

}