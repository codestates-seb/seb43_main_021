package com.codestates.seb_43_21_main_project.bidItem.entity;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class BidItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bidItemId;

    @Column
    private String bidItemName;

    @Column
    private String bidItemContent;

    @Column
    private LocalDateTime createdDate;

    @Column
    private LocalDateTime modifiedDate;

    @Column
    @Enumerated(EnumType.STRING)
    private BidItemStatus bidItemStatus;

    @OneToMany
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany
    @JoinColumn(name = "AUCTION_ITEM_ID")
    private Auction auctionItem;

}
