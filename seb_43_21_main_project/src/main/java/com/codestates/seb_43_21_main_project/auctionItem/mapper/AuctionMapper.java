package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AuctionMapper {
    Auction auctionPostDtoToAuction(AuctionDto.Post requestBody);

    default AuctionDto.Response auctionToAuctionResponseDto(Auction auction){
        if (auction == null) {
            return null;
        } else {
            AuctionDto.Response response = new AuctionDto.Response();
            response.setAuctionItemId(auction.getAuctionItemId());
            response.setMemberId(auction.getMemberId());
            response.setName(auction.getName());
            response.setContent(auction.getContent());
            response.setModifiedDate(auction.getModifiedDate());
            response.setCreatedDate(auction.getCreateDate());
            response.setPeriod(auction.getPeriod());
            response.setBidItemId(auction.getBidItemId());
            response.setAuctionStatus(auction.getAuctionStatus());
            return response;
        }
    }

    Auction auctionPatchDtoToAuction(AuctionDto.Patch requestBody);

    List<AuctionDto.Response>  auctionToAuctionResponseDtos(List<Auction> auctions);
}
