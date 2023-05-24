package com.codestates.seb_43_21_main_project.chat.dto;

import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessageRequestDto {
    public enum MessageType {
        ENTER, TALK
    }

    private MessageType type;

    private Long chatRoomId;

    private Member member;

    private ChatRoom chatRoom;

    private String message;

    private List<String> imageUrlList ;

    private String createdAt;


}