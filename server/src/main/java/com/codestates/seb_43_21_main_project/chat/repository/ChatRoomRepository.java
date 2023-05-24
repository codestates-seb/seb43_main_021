package com.codestates.seb_43_21_main_project.chat.repository;

import com.codestates.seb_43_21_main_project.chat.entity.ChatRoom;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

@Repository
public interface ChatRoomRepository extends JpaRepository<ChatRoom,Long> {
    @Query("SELECT cr FROM ChatRoom cr WHERE cr.member = :member OR cr.bidItem.member = :member")
    List<ChatRoom> findAllByMemberOrBidMember(@Param("member") Member member);

    //List<ChatRoom> findAllByMemberOrBidMember(Member member);
}
