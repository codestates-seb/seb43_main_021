package com.codestates.seb_43_21_main_project.member.repository;

import com.codestates.seb_43_21_main_project.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByNickName(String nickname);
    Optional<Member> findByEmail(String email);
    Optional<Member> findByMemberIdAndUseYn(Long memberId, Member.UseYn useYn);
}
