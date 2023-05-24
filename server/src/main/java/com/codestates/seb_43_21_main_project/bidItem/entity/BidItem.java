package com.codestates.seb_43_21_main_project.bidItem.entity;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.audit.Auditable;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Setter
@Getter
@Table
public class BidItem extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidItemId;

    @Column
    private String bidItemName;

    @Column
    private String bidItemContent;

    @Column(name = "image_url")
    @ElementCollection
    private List<String> imageUrlList;

    @Column(name = "BID_ITEM_STATUS", nullable = false)
    private BidItem.BidItemStatus bidItemStatus;

    public enum BidItemStatus {
        AUCTION_BIDDING(1, "입찰중"),
        AUCTION_EXPIRATION(2, "기간만료"),
        AUCTION_SUCCESSFUL(3, "낙찰");

        @Getter
        private int stepNumber;

        @Getter
        private String stepDescription;

        BidItemStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }

    @Column
    private String location;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "AUCTION_ITEM_ID")
    private Auction auction;

    @JsonBackReference
    @OneToOne(mappedBy = "bidItem")
    private ChatRoom chatRoom;

    //@OneToMany(mappedBy = "bidItem", cascade = CascadeType.ALL, orphanRemoval = true)
    //private List<Image> images = new ArrayList<>();


    public void addMember(Member member) {
        this.member = member;
        if (!this.member.getBidItems().contains(this)) {
            this.member.getBidItems().add(this);
        }
    }

    public void addAuction(Auction auction) {
        this.auction = auction;
        if (!this.auction.getBidItems().contains(this)) {
            this.auction.getBidItems().add(this);
        }
    }
    public void addImageUrlList(String imageUrlLis){
        imageUrlList.add(imageUrlLis);
    }
}
