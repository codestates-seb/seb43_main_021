package com.codestates.seb_43_21_main_project.auctionItem.dto;

import lombok.Getter;

import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@Getter
public class PageInfoRequest {
    @Min(value = 1 ,message = "1이상의 값을 입력해야합니다.")  // 1이상
    private long lastItemId;
    @Min(value = 1, message = "1이상의 값을 입력해야합니다.")
    private  int size;
}
