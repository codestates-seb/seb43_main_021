package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AuctionMapper {

    @Mapping(source = "memberId" , target =  "member.memberId")
    Auction auctionPostDtoToAuction(AuctionDto.Post requestBody);
//    AuctionDto.Response auctionToAuctionResponseDto(Auction auction);
    default AuctionDto.Response auctionToAuctionResponseDto(Auction auction){
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
//            response.setBidItems(this.bidItemListToBidItemResponseDtoList(auction.getBidItems()));
            response.setAuctionStatus(auction.getAuctionStatus());
            return response;
        }
    }

    Auction auctionPatchDtoToAuction(AuctionDto.Patch requestBody);

    List<AuctionDto.Response>  auctionToAuctionResponseDtos(List<Auction> auctions);
}
