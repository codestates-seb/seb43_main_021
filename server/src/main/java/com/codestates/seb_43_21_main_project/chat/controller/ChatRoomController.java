package com.codestates.seb_43_21_main_project.chat.controller;

import com.codestates.seb_43_21_main_project.chat.dto.ChatRoomResponseDto;
import com.codestates.seb_43_21_main_project.chat.entity.ChatMessage;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.chat.mapper.ChatRoomMapper;
import com.codestates.seb_43_21_main_project.chat.service.ChatRoomService;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.service.MemberService;
import com.codestates.seb_43_21_main_project.utils.ContextHolederUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/chat_room")
@Slf4j
@Validated
public class ChatRoomController {
    private final ChatRoomService chatRoomService;
    private final ContextHolederUtils contextHolederUtils;

    private final MemberService memberService;
    private final ChatRoomMapper chatRoomMapper;

    public ChatRoomController(ChatRoomService chatRoomService, ContextHolederUtils contextHolederUtils, MemberService memberService, ChatRoomMapper chatRoomMapper) {
        this.chatRoomService = chatRoomService;
        this.contextHolederUtils = contextHolederUtils;
        this.memberService = memberService;
        this.chatRoomMapper = chatRoomMapper;
    }

    @PostMapping("/{auction_item_id}/{bid_item_id}")
    public ResponseEntity createChatRoom(@PathVariable ("auction_item_id")Long auctionItemId,
                                              @PathVariable ("bid_item_id")Long bidItemId){
        Long auctionMemberId = contextHolederUtils.getAuthMemberId();
        ChatRoom chatRoom = chatRoomService.createRoom(auctionItemId,bidItemId,auctionMemberId);
        Member member = memberService.findVerifiedmember(auctionMemberId);

        return new ResponseEntity(chatRoomMapper.chatRoomResponseDto(chatRoom,member), HttpStatus.CREATED);
    }

    @GetMapping("/{chat_room_id}")
    public ResponseEntity getChatRoom(@PathVariable ("chat_room_id") Long chatRoomId) {

        Long memberId = contextHolederUtils.getAuthMemberId();
        Member member = memberService.findVerifiedmember(memberId);

        ChatRoom chatRoom =chatRoomService.getChatRoom(chatRoomId);
        return new ResponseEntity<>(chatRoomMapper.chatRoomResponseDto(chatRoom,member),HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<ChatRoomResponseDto>> getAllChatRoom(){

        Long memberId = contextHolederUtils.getAuthMemberId();
        Member member = memberService.findVerifiedmember(memberId);

        List<ChatRoom> chatRooms= chatRoomService.ChatRoomList(memberId);

        List<ChatRoomResponseDto> responseDtoList = chatRoomMapper.chatRoomResponseDtos(chatRooms,member);
        return new ResponseEntity<>(responseDtoList, HttpStatus.OK);
    }

    @DeleteMapping("/{chat_room_id}")
    public ResponseEntity deleteChatRoom(@PathVariable ("chat_room_id") Long chatRoomId){

        Long memberId = contextHolederUtils.getAuthMemberId();

        chatRoomService.deleteChat(chatRoomId,memberId);
        return ResponseEntity.noContent().build();
    }
}
