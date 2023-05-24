package com.codestates.seb_43_21_main_project.chat.dto;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ChatRoomListDto {

    private Long chatRoomId;
    private Auction auctionItem;
    private String nickname;
    private boolean isAuctionMember;

    public ChatRoomListDto(ChatRoom chatRoom, Member member) {
        this.chatRoomId = getChatRoomId();
        this.auctionItem = getAuctionItem();
        this.isAuctionMember = chatRoom.getAuction().getMember().getMemberId().equals(member.getMemberId()); // 판매자 여부 설정

        if (isAuctionMember) {
            // 판매자인 경우
            this.nickname = chatRoom.getMember().getNickName();
        } else {
            // 구매자인 경우
            this.nickname = chatRoom.getBidMember().getNickName();
        }
    }
}
