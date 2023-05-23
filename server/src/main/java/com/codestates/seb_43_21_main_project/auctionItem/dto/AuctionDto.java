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

//        @NotNull
//        private long memberId;

        @NotBlank
        private String name; // 제목
        // 이미지는 생각해보자.

        @NotBlank
        private String content; // 내용

        @NotNull
        @Min(value = 1 ,message = "1이상의 값을 입력해야합니다.")
        private int period; //기간 설정

        private List<String> imageUrlList;



        // 기본값으로 AUCTION_BIDDING 설정' /
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

        private Member member;


    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long auctionItemId;
        private String name;


        //이미지
        private List<String> imageUrlList;
        private String content;

        private LocalDateTime createdDate;
        private LocalDateTime modifiedDate;
        //      private int view; //조회수
        private int period;
        //      private long favoriteItem; //즐겨찾기
        private List<BidItemResponseDto> bidItems; //  전체 데이터
        private List<MemberResponseDto> members;

        //상태코드도 넘겨줘야함.
        private Auction.AuctionStatus auctionStatus;



    }


}
