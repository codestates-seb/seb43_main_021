package com.codestates.seb_43_21_main_project.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class MemberResponseDto {//HTTP응답 생성 객체
    private Long memberId;
    private String email;
    private String password;
    private String nickName;
    private String phoneNumber;
    private List<String> imageUrlList;
}
