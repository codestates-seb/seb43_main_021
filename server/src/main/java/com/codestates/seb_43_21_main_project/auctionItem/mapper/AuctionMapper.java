package com.codestates.seb_43_21_main_project.auctionItem.mapper;

import com.codestates.seb_43_21_main_project.auctionItem.dto.AuctionDto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemResponseDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;

import com.codestates.seb_43_21_main_project.member.dto.MemberResponseDto;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface AuctionMapper {



//    @Mapping(source = "memberId", target = "member.memberId")
    Auction auctionPostDtoToAuction(AuctionDto.Post requestBody);

//        AuctionDto.Response auctionToAuctionResponseDto(Auction auction);

    default AuctionDto.Response auctionToAuctionResponseDto(Auction auction) {
        if (auction == null) {
            return null;
        } else {
            AuctionDto.Response response = new AuctionDto.Response();
            if (auction.getAuctionItemId() != null) {
                response.setAuctionItemId(auction.getAuctionItemId());
            }
            response.setAuctionItemId(auction.getAuctionItemId());
            response.setImageUrlList(auction.getImageUrlList());
            response.setName(auction.getName());
            response.setContent(auction.getContent());
            response.setModifiedDate(auction.getModifiedDate());
            response.setCreatedDate(auction.getCreateDate());
            response.setPeriod(auction.getPeriod());
            response.setLocation(auction.getLocation());
            response.setAuctionStatus(auction.getAuctionStatus());
//            response.setMemberId(auction.getMember().getMemberId());
//            response.setNickName(auction.getMember().getNickName());



            if (auction.getMember() != null) {
                Member member = auction.getMember();

                List<MemberResponseDto> memberResponseDtoList = new ArrayList<>();
                MemberResponseDto memberResponseDto = new MemberResponseDto();
                memberResponseDto.setMemberId(member.getMemberId());
                memberResponseDto.setNickName(member.getNickName());
                memberResponseDto.setEmail(member.getEmail());
                memberResponseDto.setPhoneNumber(member.getPhoneNumber());
                memberResponseDto.setImageUrlList(member.getImageUrlList());

                memberResponseDtoList.add(memberResponseDto);

                response.setMembers(memberResponseDtoList);
            }


            if (auction.getBidItems() != null) {
                List<BidItem> bidItemList = auction.getBidItems();

                List<BidItemResponseDto> bidItemResponseDto = bidItemList.stream().map(bidItem -> {
                    BidItemResponseDto bidItemResponseDtoList = new BidItemResponseDto();
                    bidItemResponseDtoList.setBidItemId(bidItem.getBidItemId());
                    bidItemResponseDtoList.setBidItemName(bidItem.getBidItemName());
                    bidItemResponseDtoList.setImageUrlList(bidItem.getImageUrlList());
                    bidItemResponseDtoList.setBidItemContent(bidItem.getBidItemContent());
                    bidItemResponseDtoList.setCreateDate(bidItem.getCreateDate());
                    bidItemResponseDtoList.setModifiedDate(bidItem.getModifiedDate());
                    bidItemResponseDtoList.setBidItemStatus(bidItem.getBidItemStatus());
                    bidItemResponseDtoList.setMember(bidItem.getMember());
                    bidItemResponseDtoList.setAuctionItem(bidItem.getAuction());

                    return bidItemResponseDtoList;
                }).collect(Collectors.toList());
                response.setBidItems(bidItemResponseDto);
            }

            return response;
        }
    }


    Auction auctionPatchDtoToAuction(AuctionDto.Patch requestBody);

    List<AuctionDto.Response> auctionToAuctionResponseDtos(List<Auction> auctions);
}
