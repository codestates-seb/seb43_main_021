package com.codestates.seb_43_21_main_project.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter @Setter
@NoArgsConstructor
public class MultiResponseDto<T> {
    private List<T> data;
    private  PageInfo pageInfo;

    public MultiResponseDto(List<T> data, Page page){
        this.data = data;
        this.pageInfo = new PageInfo(page.getNumber(),
                page.getSize(), page.getTotalElements(), page.getTotalPages());
    }
}


// page.nextPageable() :  현재 페이지의 다음 페이지 정보 제공, 다음 페이지 없으면 예외 발생
// page.nextOrLastPageable() : 다음 페이지 정보가 없는 경우 마지막 페이지의 정보를 제공, 다음 페이지 정보를 보장해줌.