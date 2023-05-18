package com.codestates.seb_43_21_main_project.member.entity;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    //@JsonIgnore
    @Column(nullable = false)
    private String password;
    @Column(nullable = false)
    private String nickName;
    @Column(nullable = false)
    private String phoneNumber;
    
    @ElementCollection(fetch = FetchType.EAGER) // @ElementCollection 애너테이션은 사용자 등록시, 사용자의 권한을 등록하기 위한 권한 테이블을 새엇ㅇ.
    private List<String> roles = new ArrayList<>();
    public enum MemberRole{
        ROLE_USER,
        ROLE_ADMIN
    }
    
    @Enumerated(EnumType.STRING)
    private UseYn useYn;
    public enum UseYn{
        Y, //회원가입상태
        N //회원탈퇴상태
    }
    @OneToMany(mappedBy = "member")
    private List<BidItem> bidItems = new ArrayList<>();

    public void addBidItem(BidItem bidItem){
        bidItems.add(bidItem);
        if(bidItem.getMember() != this){
            bidItem.setMember(this);
        }
    }
}
