package com.codestates.seb_43_21_main_project.chat.service;

import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import com.codestates.seb_43_21_main_project.auctionItem.service.AuctionService;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.bidItem.service.BidItemService;
import com.codestates.seb_43_21_main_project.chat.dto.ChatMessageDto;
import com.codestates.seb_43_21_main_project.chat.entity.ChatMessage;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.chat.repository.ChatMessageRepository;
import com.codestates.seb_43_21_main_project.chat.repository.ChatRoomRepository;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;
    private final AuctionService auctionService;
    private final MemberService memberService;
    private final BidItemService bidItemService;

    /*채팅방 생성*/
    public ChatRoom createRoom(Long auctionItemId,Long bidItemId,Long auctionMemberId) {
        Auction auction = auctionService.findVerifiedAuction(auctionItemId);
        BidItem bidItem = bidItemService.findBidItem(bidItemId);
        Member auctionMember = memberService.findVerifiedmember(auctionMemberId);
        Member bidMember = bidItemService.findBidItem(bidItemId).getMember();
        ChatRoom chatRooms = new ChatRoom(auctionMember,bidMember,auction,bidItem);

        return chatRoomRepository.save(chatRooms);
    }


    /* 채팅방 보기 */
    public ChatRoom getChatRoom(Long chatRoomId) {

        ChatRoom chatRoom = chatRoomRepository.findById(chatRoomId).orElseThrow(
                () -> new IllegalArgumentException("이미 삭제된 채팅방 입니다.")
        );

        if (!chatRoomId.equals(chatRoom.getChatRoomId())) {
            throw new RuntimeException("채팅방이 존재하지 않습니다.");
        }
        chatRoom.setChatMessages(chatMessageRepository.findAllByChatRoom(chatRoom));
        chatRoom.initUnreadCount();

        return chatRoom;
    }

    /*나의 채팅 리스트*/
    public List<ChatRoom> ChatRoomList(Long memberId) {
        Member member = memberService.findVerifiedmember(memberId);
        return chatRoomRepository.findAllByMemberOrBidMember(member);
    }

    /* 채팅방 삭제 */
    public void deleteChat(Long chatRoomId, Long memberId) {

        memberService.findVerifiedmember(memberId);

        chatRoomRepository.findById(chatRoomId).orElseThrow(
                () -> new RuntimeException("존재하지 않는 방입니다.")
        );
        chatRoomRepository.deleteById(chatRoomId);
    }
}