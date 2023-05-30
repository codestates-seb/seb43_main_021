package com.codestates.seb_43_21_main_project.auctionItem.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemResponseDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberResponseDto;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class AuctionDto {


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {


        @NotBlank(message = "제목을 입력해주세요.")
        private String name; // 제목

        @NotBlank(message = "내용을 입력해주세요")
        private String content; // 내용

        @NotNull
        @Min(value = 1 ,message = "1이상의 값을 입력해야합니다.")
        private int period; //기간 설정

        private List<String> imageUrlList;

        @NotNull(message = "지역을 입력해주세요")
        private String location; //지역


        private Auction.AuctionStatus auctionStatus;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        @NotNull
        private long auctionItemId;

        // 이미지
        private List<String> imageUrlList;

        private String name;

        private int period;

        private String content;

        private String location; //지역


    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long auctionItemId;
        private String name;
        private String content;
        private List<String> imageUrlList;
        private String location; //지역
        private LocalDateTime createdDate;
        private LocalDateTime modifiedDate;
        private int period;
        private List<BidItemResponseDto> bidItems; //  전체 데이터
        private List<MemberResponseDto> members;
        private Auction.AuctionStatus auctionStatus;



    }


}
