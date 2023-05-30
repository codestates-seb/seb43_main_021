package com.codestates.seb_43_21_main_project.auctionItem.controller;


import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;
import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.mapper.AuctionMapper;
import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.service.BidItemService;
import com.codestates.seb_43_21_main_project.exception.BusinessLogicException;
import com.codestates.seb_43_21_main_project.exception.ExceptionCode;
import com.codestates.seb_43_21_main_project.utils.ContextHolederUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.parameters.P;
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
    private final ContextHolederUtils contextHolederUtils;
    private final BidItemService bidItemService;

    @PostMapping()
    public ResponseEntity postAuction(@Valid @RequestBody AuctionDto.Post requestBody) {
        Auction createdAuction = auctionService.createAuction(mapper.auctionPostDtoToAuction(requestBody));

        return new ResponseEntity(mapper.auctionToAuctionResponseDto(createdAuction), HttpStatus.CREATED);
    }

    @PatchMapping( "/{auction_items_id}")
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

    //내 경매 물품보기
    @GetMapping("/profile/{member_id}")
    public ResponseEntity findAuctions(@PathVariable("member_id") @Positive long memberId) {
        List<Auction> auctionList = auctionService.findAllAuctions(memberId);
        return new ResponseEntity(mapper.auctionToAuctionResponseDtos(auctionList), HttpStatus.OK);
    }


    //무한스크롤
//    @GetMapping
//    public ResponseEntity getAuctionAll(@Valid @RequestBody PageInfoRequest pageInfo) {
//        Page<Auction> pageAuctions = auctionService.findAuctions(pageInfo);
//        List<Auction> auctions = pageAuctions.getContent();
//
//        return new ResponseEntity(
//                new MultiResponseDto<>(mapper.auctionToAuctionResponseDtos(auctions), pageAuctions), HttpStatus.OK);
//    }

    //전체 데이터
    @GetMapping
    public ResponseEntity getAuctionAll(){
        List<Auction> auctions = auctionService.findAuctions();
        List<AuctionDto.Response> response = mapper.auctionToAuctionResponseDtos(auctions);
        return  new ResponseEntity(response, HttpStatus.OK);
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

    @GetMapping("/search")
    public ResponseEntity searchAuction(@RequestParam String keyword){
        if(keyword == null || keyword.trim().isEmpty()) {
            throw  new BusinessLogicException(ExceptionCode.AUCTION_BAD_REQUEST);
        }
        List<Auction> auctions = auctionService.searchAuctionByName(keyword, Sort.Direction.DESC);
        return  new ResponseEntity(mapper.auctionToAuctionResponseDtos(auctions),HttpStatus.OK);
    }

    //좋아요 기능
//    @PostMapping("/{auction_items_id}/like/{member_id}")
//    public ResponseEntity likeAuction(@PathVariable("auction_items_id")long auctionItemId,
//                                      @PathVariable("member_id") long memberId) {
//        Auction likedAuction = auctionService.likeAuction(auctionItemId, memberId);
//
//        return new ResponseEntity(mapper.auctionToAuctionResponseDto(likedAuction), HttpStatus.OK);
//    }


    @PostMapping("/{auction_items_id}/{bid_item_id}/select")
    public void selectBidItem(@PathVariable("auction_items_id") Long auctionItemId,
                              @PathVariable("bid_item_id") Long bidItemId) {
        Long memberId = contextHolederUtils.getAuthMemberId();
        Auction auction = auctionService.findVerifiedAuction(auctionItemId);
        BidItem bidItem = bidItemService.findBidItem(bidItemId);

        auction.selectBidItem(bidItem);
        auction.setAuctionStatus(Auction.AuctionStatus.AUCTION_SUCCESSFUL);
        auctionService.updateAuction(auction);
    }
}