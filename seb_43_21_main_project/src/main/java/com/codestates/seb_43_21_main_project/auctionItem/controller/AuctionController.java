package com.codestates.seb_43_21_main_project.auctionItem.controller;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.mapper.AuctionMapper;
import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequiredArgsConstructor
@RequestMapping("/auction_items")
@Validated
public class AuctionController {

    private final AuctionService auctionService;
    private final AuctionMapper mapper;

    @PostMapping
    public ResponseEntity postAuction(@Valid @RequestBody AuctionDto.Post requestBody) {
        Auction auction = mapper.auctionPostDtoToAuction(requestBody);
        Auction createdAuction = auctionService.createAuction(auction);


        return new ResponseEntity(mapper.auctionToAuctionResponseDto(createdAuction), HttpStatus.CREATED);
    }

    @PatchMapping("/{auction_items_id}")
    public ResponseEntity patchAuction(@PathVariable("auction_items_id") @Positive long auctionItemId,
                                       @Valid @RequestBody AuctionDto.Patch requestBody) {
        requestBody.setAuctionItemId(auctionItemId);
        Auction updatedAuction = auctionService.updateAuction(mapper.auctionPatchDtoToAuction(requestBody));
        return new ResponseEntity(mapper.auctionToAuctionResponseDto(updatedAuction), HttpStatus.OK);
    }

    @GetMapping("{auction_items_id}")
    public ResponseEntity getAuction(@PathVariable("auction_items_id") @Positive long auctionItemId) {
        Auction findedAuction = auctionService.findAuction(auctionItemId);
        return null;
    }

    @GetMapping
    public ResponseEntity getAuctionAll(@Positive @RequestParam int page,
                                        @Positive @RequestParam int size) {

        Page<Auction> pageAuctions = auctionService.findAuctions(page - 1, size);
        List<Auction> auctions = pageAuctions.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.auctionToAuctionResponseDtos(auctions), pageAuctions), HttpStatus.OK);
    }

    @DeleteMapping("{auction_items_id}")
    public ResponseEntity deleteAuction(@PathVariable("auction_items_id") @Positive long auctionItemId) {
         auctionService.deleteAuction(auctionItemId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping
    public ResponseEntity deleteAuctionAll() {
        auctionService.deleteAll();
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}