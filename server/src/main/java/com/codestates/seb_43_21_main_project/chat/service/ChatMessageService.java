package com.codestates.seb_43_21_main_project.chat.service;

import com.codestates.seb_43_21_main_project.chat.dto.ChatMessageDto;
import com.codestates.seb_43_21_main_project.chat.dto.ChatMessageRequestDto;
import com.codestates.seb_43_21_main_project.chat.entity.ChatMessage;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.chat.repository.ChatMessageRepository;
import com.codestates.seb_43_21_main_project.chat.repository.ChatRoomRepository;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatMessageService{

    private final ChatMessageRepository messageRepository;
    private final ChatRoomRepository roomRepository;

    public ChatMessageRequestDto createChat(ChatMessageRequestDto message, Long roomId) {

        ChatRoom chatRoom = roomRepository.findById(roomId).orElseThrow(
                () -> new IllegalArgumentException("채팅방이 존재하지 않습니다.")
        );
        ChatMessage addMessage = new ChatMessage(message.getMessage(),message.getImageUrlList(),message.getMember(),chatRoom);
        if (!chatRoom.getMember().equals(message.getMember())){
            chatRoom.addUnreadMessageCount();
        }
        messageRepository.save(addMessage);

        return message;
    }

}
