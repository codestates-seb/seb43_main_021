package com.codestates.seb_43_21_main_project.auctionItem.entity;

import com.codestates.seb_43_21_main_project.audit.Auditable;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.SQLDeleteAll;
import org.hibernate.annotations.Where;

import javax.persistence.*;


@SQLDelete(sql = "UPDATE auctionItemId SET deleted = true WHERE id=?") //삭제 쿼리 수행시 사용
@Where(clause = "deleted = false") // status = true일 경우 결과에 포함되지 X
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "AUCTIONITEM")
public class Auction extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long auctionItemId;

    @Column(name = "AUCTION_ITEM_NAME", length = 100, nullable = false)
    private String name;
    //이미지

    @Column(name = "AUCTION_ITEM_COUNTENT", columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private int period;

    @Column(nullable = false)
    private boolean deleted = Boolean.FALSE;



    //    // Todo:  매핑관계 설정
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;


    private long bidItemId;
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
        private String stepDescription;

        AuctionStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }


}

