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
                page.getSize(), page.getTotalElements());
    }
}


