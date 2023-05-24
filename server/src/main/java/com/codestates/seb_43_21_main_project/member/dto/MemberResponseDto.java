package com.codestates.seb_43_21_main_project.member.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;


@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {//HTTP응답 생성 객체
    private Long memberId;
    private String email;
//     @JsonIgnore
    private String password;
    private String nickName;
    private String phoneNumber;
    private List<String> imageUrlList;

}
