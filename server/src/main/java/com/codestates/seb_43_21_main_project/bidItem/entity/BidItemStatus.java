package com.codestates.seb_43_21_main_project.bidItem.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum BidItemStatus {
    BIDDING("입찰중"),
    APPROVE("낙찰"),
    EXPIRED("기한만료"),
    ;
    private final String status;
}
