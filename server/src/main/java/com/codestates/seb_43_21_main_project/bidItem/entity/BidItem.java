package com.codestates.seb_43_21_main_project.bidItem.entity;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.audit.Auditable;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

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

    @Column
    @Enumerated(EnumType.STRING)
    private BidItemStatus bidItemStatus;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "AUCTION_ITEM_ID")
    private Auction auction;

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
}
