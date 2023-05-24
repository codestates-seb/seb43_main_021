package com.codestates.seb_43_21_main_project.chat.controller;

import com.codestates.seb_43_21_main_project.chat.dto.ChatMessageRequestDto;
import com.codestates.seb_43_21_main_project.chat.service.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ChatMessageController {

    private final SimpMessageSendingOperations sendingOperations;
    private final ChatMessageService chatMessageService;

    @MessageMapping("/chat/message")
    public void enter(ChatMessageRequestDto message) {
        if (ChatMessageRequestDto.MessageType.ENTER.equals(message.getType())) {
//            message.setMessage(message.getSender()+"님이 입장하였습니다.");
            message.setMessage(LocalDateTime.now().toString());
        }else {
            chatMessageService.createChat(message, message.getChatRoomId());
        }
        message.setCreatedAt(LocalDateTime.now().toString());
        log.info("image -> {}", message.getImageUrlList());
        sendingOperations.convertAndSend("/chat/chat_room/"+message.getChatRoomId(),message);
    }
}