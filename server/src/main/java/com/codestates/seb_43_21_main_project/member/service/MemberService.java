package com.codestates.seb_43_21_main_project.member.service;

import com.codestates.seb_43_21_main_project.exception.BusinessLogicException;
import com.codestates.seb_43_21_main_project.exception.ExceptionCode;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.repository.MemberRepository;
import com.codestates.seb_43_21_main_project.security.auths.utils.CustomAuthorityUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }
    //member 생성
    public Member createMember(Member member){

        verifyExistsNickName(member.getNickName());

        member.setPassword(passwordEncoding(member.getPassword()));
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);
        member.setUseYn(Member.UseYn.Y);
        return memberRepository.save(member);
    }
    //Member 업데이트
    public Member updateMember(Member member){
        Member findMember = findVerifiedmember(member.getMemberId());

        Optional.ofNullable(member.getEmail())
                .ifPresent(findMember::setEmail);
        Optional.ofNullable(member.getPassword())
                .ifPresent(password-> {
                    findMember.setPassword(passwordEncoding(password));
                }); // 업데이트 할때 패스워드가 암호화 안되는 오류? 해결
        Optional.ofNullable(member.getNickName())
                .ifPresent(findMember::setNickName);
        Optional.ofNullable(member.getPhoneNumber())
                .ifPresent(findMember::setPhoneNumber);
        verifyExistsNickName(member.getNickName()); // 업데이트할때 닉네임 중복확인

        return memberRepository.save(findMember);
    }
    public Member findMember(Long memberId){
        return findVerifiedmember(memberId);
    }

    public void softDeleteMember(Long memberId){
        Member member = memberRepository.findById(memberId).orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        member.setUseYn(Member.UseYn.N);
        memberRepository.save(member);
    }

    //닉네임 존재하는지 확인
    public void verifyExistsNickName(String nickname){
        Optional<Member> member = memberRepository.findByNickName(nickname);
        if(member.isPresent()){
            throw new BusinessLogicException((ExceptionCode.MEMBER_EXISTS));
        }
    }

    //멤버가 존재하는지, 회원상태가 Y인 상태인지 확인
    public Member findVerifiedmember(long memberId){
        Optional<Member> optionalmember = memberRepository.findByMemberIdAndUseYn(memberId, Member.UseYn.Y);

        Member findMember = optionalmember.orElseThrow(()->new BusinessLogicException((ExceptionCode.MEMBER_NOT_FOUND)));

        return findMember;
    }
    private String passwordEncoding(String password) {
        return passwordEncoder.encode(password);
    }
}
