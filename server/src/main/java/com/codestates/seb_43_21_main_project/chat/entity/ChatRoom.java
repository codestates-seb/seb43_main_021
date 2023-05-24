package com.codestates.seb_43_21_main_project.chat.entity;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatRoom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatRoomId;

    private Integer unreadMessageCount;

    @JsonBackReference
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "AUCTION_ITEM_MEMBER_ID")
    private Member member;

    @OneToOne(fetch = LAZY)
    @JoinColumn(name = "BID_ITEM_MEMBER_ID")
    private Member bidMember;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "AUCTION_ITEM_ID")
    private Auction auction;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "BID_ITEM_ID")
    private BidItem bidItem;


    @OneToMany(mappedBy = "chatRoom")
    private List<ChatMessage> chatMessages = new ArrayList<>();

    public ChatRoom(Member member, Member bidMember, Auction auctionItem,BidItem bidItem) {
        this.member = member;
        this.bidMember = bidMember;
        this.auction = auctionItem;
        this.bidItem = bidItem;
    }

    public void addUnreadMessageCount() {
        this.unreadMessageCount++;
    }

    public void initUnreadCount() {
        this.unreadMessageCount = 0;
    }
}

