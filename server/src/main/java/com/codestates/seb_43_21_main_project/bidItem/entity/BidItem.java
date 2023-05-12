package com.codestates.seb_43_21_main_project.bidItem.entity;

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

    //@OneToMany
    //private Member member;

    //@OneToMany
    //private AuctionItem auctionItem;

}
