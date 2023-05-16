package com.codestates.seb_43_21_main_project.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "회원을 찾을 수 없습니다."),
    MEMBER_EXISTS(404, "중복된 닉네임입니다."),
    ACCESS_NOT_ALLOWED(403, "권한이 없습니다."),
    AUCTION_NOT_FOUND(404, "경매 물품이 존재하지 않습니다."),

    AUCTION_INTERNAL_SERVER_ERROR(500,"양수를 입력해주세요.");


    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message){
        this.status = status;
        this.message = message;
    }
}
