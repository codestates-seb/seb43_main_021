package com.codestates.seb_43_21_main_project.auctionItem.controller;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;
import com.codestates.seb_43_21_main_project.auctionItem.dto.PageInfoRequest;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.mapper.AuctionMapper;
import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.dto.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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


    //consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE} //consumes : 들어오는 데이터를 정의
    @PostMapping(consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity postAuction(@Valid @RequestPart AuctionDto.Post requestBody, @RequestPart MultipartFile auctionImg) {

//        Auction auction = mapper.auctionPostDtoToAuction(requestBody);
//        System.out.println("변환이 잘 되었는가?");
//        Auction createdAuction = auctionService.createAuction(auction);
//        System.out.println("Controller 다시 들어오는가?");
        Auction createdAuction = auctionService.createAuction(mapper.auctionPostDtoToAuction(requestBody), auctionImg);

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
        return new ResponseEntity(mapper.auctionToAuctionResponseDto(findedAuction), HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getAuctionAll(@Positive @RequestParam int page,
//                                        @Positive @RequestParam int size) {
//
//        Page<Auction> pageAuctions = auctionService.findAuctions(page - 1, size);
//        List<Auction> auctions = pageAuctions.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.auctionToAuctionResponseDtos(auctions), pageAuctions), HttpStatus.OK);
//    }

    //Todo : 무한스크롤 기능 구현
    @GetMapping
    public ResponseEntity getAuctionAll(@Valid @RequestBody PageInfoRequest pageInfo) {

        Page<Auction> pageAuctions = auctionService.findAuctions(pageInfo);
        List<Auction> auctions = pageAuctions.getContent();
        return new ResponseEntity(
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