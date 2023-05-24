package com.codestates.seb_43_21_main_project.entity;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "auction_item_id")
    private Auction auction;

    @ManyToOne
    @JoinColumn(name = "bid_item_id")
    private BidItem bidItem;

    public Image(String imageUrl, BidItem bidItem) {
        this.imageUrl = imageUrl;
        this.bidItem = bidItem;
    }


    public Image(String imageUrl, Auction auction) {
        this.imageUrl = imageUrl;
        this.auction = auction;
    }
}