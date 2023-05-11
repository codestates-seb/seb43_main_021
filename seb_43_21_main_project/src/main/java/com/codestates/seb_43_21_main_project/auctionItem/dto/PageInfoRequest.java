package com.codestates.seb_43_21_main_project.auctionItem.dto;

import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@Getter
public class PageInfoRequest {
//    @Min(value = 1)  // 1이상
    private long lastItemId;
//    @Min(value = 1)
    private  int size;
}
