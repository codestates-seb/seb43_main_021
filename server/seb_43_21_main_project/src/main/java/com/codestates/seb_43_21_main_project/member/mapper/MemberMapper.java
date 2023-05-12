package com.codestates.seb_43_21_main_project.member.mapper;

import com.codestates.seb_43_21_main_project.member.dto.MemberPatchDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberPostDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberResponseDto;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto requestBody);
    Member memberPatchDtoToMember(MemberPatchDto requestBody);
    MemberResponseDto memberToMemberResponseDto(Member member);
}
