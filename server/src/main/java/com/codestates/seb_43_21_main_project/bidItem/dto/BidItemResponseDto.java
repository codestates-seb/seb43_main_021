package com.codestates.seb_43_21_main_project.bidItem.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class BidItemResponseDto {
    private Long bidItemId;

    private String bidItemName;

    private String bidItemContent;

    private List<String> imageUrlList;

    private LocalDateTime createDate;

    private LocalDateTime modifiedDate;

    private Enum bidItemStatus;

    private String location;

    private Member member;

    private Auction auctionItem;

}