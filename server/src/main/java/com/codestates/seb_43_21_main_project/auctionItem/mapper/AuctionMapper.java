package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemResponseDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AuctionMapper {


    @Mapping(source = "memberId", target = "member.memberId")
    Auction auctionPostDtoToAuction(AuctionDto.Post requestBody);

    //    AuctionDto.Response auctionToAuctionResponseDto(Auction auction);
    default AuctionDto.Response auctionToAuctionResponseDto(Auction auction) {
        if (auction == null) {
            return null;
        } else {
            AuctionDto.Response response = new AuctionDto.Response();
            if (auction.getAuctionItemId() != null) {
                response.setAuctionItemId(auction.getAuctionItemId());
            }
            response.setAuctionItemId(auction.getAuctionItemId());
            response.setMemberId(auction.getMember().getMemberId());
            response.setName(auction.getName());
            response.setContent(auction.getContent());
            response.setModifiedDate(auction.getModifiedDate());
            response.setCreatedDate(auction.getCreateDate());
            response.setPeriod(auction.getPeriod());
            response.setAuctionStatus(auction.getAuctionStatus());

            if (auction.getBidItems() != null) {
                List<BidItem> bidItemList = auction.getBidItems();

                List<BidItemResponseDto> bidItemResponseDto = bidItemList.stream().map(bidItem -> {
                    BidItemResponseDto bidItemResponseDtoList = new BidItemResponseDto();
                    bidItemResponseDtoList.setBidItemId(bidItem.getBidItemId());
                    bidItemResponseDtoList.setBidItemName(bidItem.getBidItemName());
                    bidItemResponseDtoList.setBidItemContent(bidItem.getBidItemContent());
                    return bidItemResponseDtoList;
                }).collect(Collectors.toList());
                response.setBidItems(bidItemResponseDto);
            }

            return response;
        }
    }

    Auction auctionPatchDtoToAuction(AuctionDto.Patch requestBody);

    List<AuctionDto.Response>  auctionToAuctionResponseDtos(List<Auction> auctions);
}
