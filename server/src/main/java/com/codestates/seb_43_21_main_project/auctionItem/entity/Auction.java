package com.codestates.seb_43_21_main_project.auctionItem.entity;

import com.codestates.seb_43_21_main_project.audit.Auditable;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.codestates.seb_43_21_main_project.member.entity.Member;

import lombok.*;
import org.hibernate.annotations.SQLDelete;;
import org.hibernate.annotations.Where;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@SQLDelete(sql = "UPDATE auctionItemId SET deleted = true WHERE id=?") //삭제 쿼리 수행시 사용
@Where(clause = "deleted = false") // deleted = true일 경우 결과에 포함되지 X
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
    private Long auctionItemId;

    @Column(name = "AUCTION_ITEM_NAME", length = 100, nullable = false)
    private String name;
    //이미지

    @Column(name = "AUCTION_ITEM_COUNTENT", columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private int period;

    @Column(nullable = false)
    private boolean deleted = Boolean.FALSE;


    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;


    //  private int view; //조회수
//   private long favoriteItem; //즐겨찾기

    //      auction_item_status -> enum 클래스
    @Enumerated(value = EnumType.STRING)
    @Column(name = "AUCTION_ITEM_STATUS", nullable = false)
    private AuctionStatus auctionStatus; //기본값

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

    @JsonIgnore
    @OneToMany(mappedBy = "auction")
    private List<BidItem> bidItems = new ArrayList<>();

    @Column(name = "image_url")
    @ElementCollection
    private List<String> imageUrlList;

    public void addBidItem(BidItem bidItem) {
        bidItems.add(bidItem);
        if (bidItem.getAuction() != this) {
            bidItem.setAuction(this);
        }
    }

    public void addImageUrlList(String imageUrlLis) {
        imageUrlList.add(imageUrlLis);
    }

//    public void addMember(Member member) {
//        this.member = member;
//        if (!this.member.getAuctions().contains(this)) {
//            this.member.getAuctions().add(this);
//        }
//    }
//    public Auction(Member member){
//        this.member = member;
//    }

    //매핑
    public void setMember(Member member) {
        this.member = member;
    }


}
