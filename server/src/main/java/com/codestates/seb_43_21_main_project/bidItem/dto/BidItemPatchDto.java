package com.codestates.seb_43_21_main_project.bidItem.dto;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItemStatus;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class BidItemPatchDto {
    private Long bidItemId;
    @NotEmpty(message = "공백이 아니어야 합니다.")
    private String bidItemName;

    @NotEmpty(message = "공백이 아니어야 합니다.")
    private String bidItemContent;

    private BidItemStatus bidItemStatus;

    private List<String> imageUrlList;
}
