package com.codestates.seb_43_21_main_project.auctionItem.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Builder @AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
@Entity
@Table(name = "AUCTIONITEM")
public class Auction  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long auctionItemId;

    @Column(name = "AUCTION_ITEM_NAME", length = 100, nullable = false)
    private String name;
    //이미지

    @Column(name = "AUCTION_ITEM_COUNTENT", columnDefinition = "TEXT",  nullable = false)
    private String content;

    @Column(nullable = false)
    private int period;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdDate = LocalDateTime.now();  //Todo : null값 저장되는거 수정하기

    @LastModifiedDate
    private LocalDateTime modifiedDate = LocalDateTime.now(); //Todo : null값 저장되는거 수정하기

// Todo :  소프트 딜리트 컬럼 추가하기 : @where 공부하고 추가

//    매핑관계 설정
    private long categoryId;
    private  long memberId;
    private  long bidItemId;
 //  private int view; //조회수
//   private long favoriteItem; //즐겨찾기

//      auction_item_status -> enum 클래스
    @Enumerated(value = EnumType.STRING)
    @Column(name = "AUCTION_ITEM_STATUS", nullable = false)
    private AuctionStatus auctionStatus = AuctionStatus.AUCTION_BIDDING; //기본값

    public enum AuctionStatus {
        AUCTION_BIDDING(1, "입찰중"),
        AUCTION_EXPIRATION(2, "기간만료"),
        AUCTION_SUCCESSFUL(3, "낙찰");

        @Getter
        private int stepNumber;

        @Getter
        private  String stepDescription;

        AuctionStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }



}
