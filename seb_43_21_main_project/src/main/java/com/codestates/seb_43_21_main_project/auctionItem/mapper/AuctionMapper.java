package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AuctionMapper {
    Auction auctionPostDtoToAuction(AuctionDto.Post requestBody);

    AuctionDto.Response auctionToAuctionResponseDto(Auction auction);

    Auction auctionPatchDtoToAuction(AuctionDto.Patch requestBody);

    List<AuctionDto.Response>  auctionToAuctionResponseDtos(List<Auction> auctions);
}
