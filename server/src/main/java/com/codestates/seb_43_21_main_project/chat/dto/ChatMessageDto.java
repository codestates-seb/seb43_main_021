package com.codestates.seb_43_21_main_project.chat.dto;

import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ChatMessageDto {

    private String message;

    private Member member;

    private List<String> imageUrlList;

    private ChatRoom chatRoom;

}
