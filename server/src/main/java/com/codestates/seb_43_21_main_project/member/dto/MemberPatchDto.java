package com.codestates.seb_43_21_main_project.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

@Getter
public class MemberPatchDto {
    private long memberId;
    @Email
    private String email;

    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d).{4,16}$", message = "비밀번호는 영어와 숫자를 무조건 포함하며, 4글자 이상 16글자 이하로 입력해주세요.")
    private String password;

    private String nickName;
    @Pattern(regexp = "^\\d{3}-\\d{4}-\\d{4}$", message = "휴대폰 번호는 '000-0000-0000' 형식으로 입력해주세요.")
    private String phoneNumber;

    public void setMemberId(long memberId){
        this.memberId = memberId;
    }
}
