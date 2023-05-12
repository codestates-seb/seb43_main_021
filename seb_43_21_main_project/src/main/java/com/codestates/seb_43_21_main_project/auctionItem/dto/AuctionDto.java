package com.codestates.seb_43_21_main_project.auctionItem.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

public class AuctionDto {


    @Getter
    @Setter
    @NoArgsConstructor
    public static class Post {
        @NotBlank
        private String name; // 제목
        // 이미지는 생각해보자.

        @NotBlank
        private String content; // 내용

        @NotNull
        @Min(value = 1 ,message = "1이상의 값을 입력해야합니다.")
        private int period; //기간 설정 (기간 30일) num >30 return 30

//        @NotNull
//        private long categoryId;

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


//        private int period; //기간 설정 (기간 30일)


        private String content;


    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long auctionItemId;
        private long memberId;
        private String name;
        //이미지
        private String content;
        //Todo : 작성일, 수정일 null 값 들어옴. (수정 예정)
        private LocalDateTime createdDate;
        private LocalDateTime modifiedDate;
        //      private int view; //조회수
        private int period;
        //      private long favoriteItem; //즐겨찾기
        private long bidItemId; //  전체 데이터..

        //상태코드도 넘겨줘야함.
        private Auction.AuctionStatus auctionStatus;
    }
}
