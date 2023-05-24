package com.codestates.seb_43_21_main_project.chat.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemResponseDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.chat.entity.ChatMessage;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ChatRoomResponseDto {

    private Long chatRoomId;

    private Auction auction;

    private BidItem bidItem;

    private Member member;

    private Integer unreadMessageCount;

    private List<ChatMessage> chatMessages;

    private LocalDateTime modifiedDate;

    //private List<ChatRoom> chatRooms;

    //private boolean isAuctionMember;



}
