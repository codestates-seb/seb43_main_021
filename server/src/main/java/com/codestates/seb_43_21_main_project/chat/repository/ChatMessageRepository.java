package com.codestates.seb_43_21_main_project.chat.repository;

import com.codestates.seb_43_21_main_project.chat.entity.ChatMessage;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.chat.service.ChatMessageService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatMessageRepository extends JpaRepository<ChatMessage,Long> {
    List<ChatMessage> findAllByChatRoom(ChatRoom chatRoom);
}
