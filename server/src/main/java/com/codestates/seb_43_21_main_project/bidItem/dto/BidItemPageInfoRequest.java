package com.codestates.seb_43_21_main_project.bidItem.dto;

import lombok.Getter;

import javax.validation.constraints.Min;

@Getter
public class BidItemPageInfoRequest {
    @Min(value = 1)
    private long bidItemLastItemId;
    @Min(value = 1)
    private  int size;
}
