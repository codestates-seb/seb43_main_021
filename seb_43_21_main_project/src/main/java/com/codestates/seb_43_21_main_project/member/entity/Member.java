package com.codestates.seb_43_21_main_project.member.entity;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String nickName;
    @Column(nullable = false)
    private String phoneNumber;

    @Column(name="deleted")
    private boolean deleted;

    @ElementCollection(fetch = FetchType.EAGER) // @ElementCollection 애너테이션은 사용자 등록시, 사용자의 권한을 등록하기 위한 권한 테이블을 새엇ㅇ.
    private List<String> roles = new ArrayList<>();


    public enum MemberRole{
        ROLE_USER,
        ROLE_ADMIN
    }
}
