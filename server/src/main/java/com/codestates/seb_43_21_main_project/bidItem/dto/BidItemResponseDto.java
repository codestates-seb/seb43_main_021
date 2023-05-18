package com.codestates.seb_43_21_main_project.bidItem.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItemStatus;
import com.codestates.seb_43_21_main_project.image.entity.Image;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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

    private BidItemStatus bidItemStatus;

    private Member member;

    private Auction auctionItem;

}