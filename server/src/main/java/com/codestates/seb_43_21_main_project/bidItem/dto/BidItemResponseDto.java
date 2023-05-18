package com.codestates.seb_43_21_main_project.bidItem.dto;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItemStatus;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Getter
@Setter
public class BidItemResponseDto {
    private Long bidItemId;

    private String bidItemName;

    private String bidItemContent;

    private LocalDateTime createDate;

    private LocalDateTime modifiedDate;

    private BidItemStatus bidItemStatus;

    //private Member member;

    //private AuctionItem auctionItem;

}