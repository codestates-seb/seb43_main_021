package com.codestates.seb_43_21_main_project.member.controller;

import com.codestates.seb_43_21_main_project.dto.SingleResponseDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberPatchDto;
import com.codestates.seb_43_21_main_project.member.dto.MemberPostDto;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.mapper.MemberMapper;
import com.codestates.seb_43_21_main_project.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper){
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto){
        Member member =  mapper.memberPostDtoToMember(memberPostDto);

        Member createMember = memberService.createMember(member);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),HttpStatus.CREATED);
    }

    @PatchMapping("/profile/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") long memberId,
                                      @Valid @RequestBody MemberPatchDto requestBody){
        requestBody.setMemberId(memberId);

        Member member = memberService.updateMember(mapper.memberPatchDtoToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.memberToMemberResponseDto(member)),HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){

        Member response = memberService.findMember(memberId);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),HttpStatus.OK);
    }

    @DeleteMapping("/profile/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.softDeleteMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
