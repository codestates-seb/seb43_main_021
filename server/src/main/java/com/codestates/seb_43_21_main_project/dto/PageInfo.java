package com.codestates.seb_43_21_main_project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PageInfo {
    private  int page;
    private  int size;
    private long totalElements;
    private int totalPage;// 전체 데이터/size

}
