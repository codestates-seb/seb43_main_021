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
    private long bidItemId;

    @Column
    private String bidItemName;

    @Column
    private String bidItemContent;

    @Column
    @Enumerated(EnumType.STRING)
    private BidItemStatus bidItemStatus;

    //@OneToMany
    //@JoinColumn(name = "MEMBER_ID")
    //private Member member;

    //@OneToMany
    //@JoinColumn(name = "AUCTION_ITEM_ID")
    //private Auction auctionItem;

}
