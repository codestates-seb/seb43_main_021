package com.codestates.seb_43_21_main_project.chat.mapper;

import com.codestates.seb_43_21_main_project.chat.dto.ChatRoomResponseDto;
import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.List;
@Mapper(componentModel = "spring")
public interface ChatRoomMapper {

    default ChatRoomResponseDto chatRoomResponseDto(ChatRoom chatRoom, Member member) {
        if (chatRoom == null) return null;
        else {
            ChatRoomResponseDto response = new ChatRoomResponseDto();
            response.setChatRoomId(chatRoom.getChatRoomId());
            response.setAuction(chatRoom.getAuction());
            response.setBidItem(chatRoom.getBidItem());
            if (chatRoom.getMember().equals(member)) {
                response.setMember(chatRoom.getBidItem().getMember());
            } else {
                response.setMember(chatRoom.getMember());
            }
            response.setChatMessages(chatRoom.getChatMessages());
            response.setUnreadMessageCount(chatRoom.getUnreadMessageCount());
            return response;
        }
    }

    default List<ChatRoomResponseDto> chatRoomResponseDtos(List<ChatRoom> chatRooms, Member member) {
        if (chatRooms == null) {
            return null;
        }

        List<ChatRoomResponseDto> list = new ArrayList<>(chatRooms.size());
        for (ChatRoom chatRoom : chatRooms) {
            list.add(chatRoomResponseDto(chatRoom,member));
        }

        return list;
    }

}

