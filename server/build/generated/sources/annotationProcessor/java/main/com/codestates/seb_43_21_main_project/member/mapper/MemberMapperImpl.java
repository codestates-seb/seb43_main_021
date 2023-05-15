package com.codestates.seb_43_21_main_project.member.mapper;

import com.codestates.seb_43_21_main_project.member.dto.MemberPatchDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberPostDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberResponseDto;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-15T16:40:31+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( requestBody.getEmail() );
        member.setPassword( requestBody.getPassword() );
        member.setNickName( requestBody.getNickName() );
        member.setPhoneNumber( requestBody.getPhoneNumber() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( requestBody.getMemberId() );
        member.setEmail( requestBody.getEmail() );
        member.setPassword( requestBody.getPassword() );
        member.setNickName( requestBody.getNickName() );
        member.setPhoneNumber( requestBody.getPhoneNumber() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        Long memberId = null;
        String email = null;
        String password = null;
        String nickName = null;
        String phoneNumber = null;

        memberId = member.getMemberId();
        email = member.getEmail();
        password = member.getPassword();
        nickName = member.getNickName();
        phoneNumber = member.getPhoneNumber();

        MemberResponseDto memberResponseDto = new MemberResponseDto( memberId, email, password, nickName, phoneNumber );

        return memberResponseDto;
    }
}
