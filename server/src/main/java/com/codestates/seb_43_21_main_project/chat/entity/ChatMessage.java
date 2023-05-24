package com.codestates.seb_43_21_main_project.chat.entity;

import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatMessageId;

    @Column(columnDefinition = "TEXT")
    private String message;

    @Column(name = "image_url")
    @ElementCollection
    private List<String> imageUrlList;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    public ChatMessage(String message, List<String> imageUrlList, Member member, ChatRoom chatRoom) {
        this.message = message;
        this.member = member;
        this.imageUrlList= imageUrlList;
        this.chatRoom = chatRoom;
    }
}


