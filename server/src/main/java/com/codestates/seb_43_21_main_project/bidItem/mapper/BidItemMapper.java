package com.codestates.seb_43_21_main_project.bidItem.mapper;

import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPatchDto;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPostDto;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemResponseDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BidItemMapper {
    BidItem bidItemPostDtoToBidItem(BidItemPostDto bidItemPostDto);

    BidItem bidItemPatchDtoToBidItem(BidItemPatchDto bidItemPatchDto);

    default BidItemResponseDto bidItemToBidItemResponseDto(BidItem bidItem){
        if (bidItem == null) return null;
        else {
            BidItemResponseDto response = new BidItemResponseDto();
            response.setBidItemId(bidItem.getBidItemId());
            response.setBidItemName(bidItem.getBidItemName());
            response.setBidItemContent(bidItem.getBidItemContent());
            response.setCreatedDate(bidItem.getCreatedDate());
            response.setModifiedDate(bidItem.getModifiedDate());
            response.setBidItemStatus(bidItem.getBidItemStatus());
            //response.setMember(bidItem.getMember());
            //response.setAuctionItem(bidItem.getAuctionItem());
            return response;
        }
    }
}
