package com.codestates.seb_43_21_main_project.member.dto;

import com.codestates.seb_43_21_main_project.validator.NotSpace;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@AllArgsConstructor
public class MemberPostDto {

    @NotSpace
    @Email
    private String email;
    @NotSpace
    @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d).{4,16}$", message = "비밀번호는 영어와 숫자를 무조건 포함하며, 4글자 이상 16글자 이하로 입력해주세요.")
    private String password;
    @NotSpace
    private String nickName;
    @NotSpace
    @Pattern(regexp = "^\\d{3}-\\d{4}-\\d{4}$", message = "휴대폰 번호는 '000-0000-0000' 형식으로 입력해주세요.")
    private String phoneNumber;
    // private String photo;
    // private String location;
}
