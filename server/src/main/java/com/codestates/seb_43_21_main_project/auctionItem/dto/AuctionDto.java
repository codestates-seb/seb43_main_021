package com.codestates.seb_43_21_main_project.auctionItem.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemResponseDto;
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

        @NotNull
        private long memberId;

        @NotBlank
        private String name; // 제목
        // 이미지는 생각해보자.

        @NotBlank
        private String content; // 내용

        @NotNull
        @Min(value = 1 ,message = "1이상의 값을 입력해야합니다.")
        private int period; //기간 설정 (기간 30일) num >30 return 30


        // 기본값으로 AUCTION_BIDDING 설정' / Todo : 기간 만료는 어디서 처리해야하는가..
        private Auction.AuctionStatus auctionStatus = Auction.AuctionStatus.AUCTION_BIDDING;

    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Patch {
        @NotNull
        private long auctionItemId;


        private String name;

        // 이미지


        private int period;


        private String content;


    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long auctionItemId;

        private String name;
        //이미지
        private String content;
        private LocalDateTime createdDate;
        private LocalDateTime modifiedDate;
        //      private int view; //조회수
        private int period;
        private long memberId;
        //      private long favoriteItem; //즐겨찾기
        private List<BidItemResponseDto> bidItems; //  전체 데이터..

        //상태코드도 넘겨줘야함.
        private Auction.AuctionStatus auctionStatus;
    }
}
