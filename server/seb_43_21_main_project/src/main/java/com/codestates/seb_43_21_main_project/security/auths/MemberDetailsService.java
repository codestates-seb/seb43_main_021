package com.codestates.seb_43_21_main_project.security.auths;



import com.codestates.seb_43_21_main_project.member.entity.Member;
import com.codestates.seb_43_21_main_project.member.repository.MemberRepository;
import com.codestates.seb_43_21_main_project.security.auths.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class MemberDetailsService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    public MemberDetailsService(MemberRepository memberRepository, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new UsernameNotFoundException("유저가 없습니다."));

        return new MemberDetails(findMember);
    }

    private final class MemberDetails extends Member implements UserDetails {

        MemberDetails(Member member) {
            setMemberId(member.getMemberId());
            setNickName(member.getNickName());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }
        @Override
        public String getUsername() {
            return getNickName();
        }
        @Override
        public boolean isAccountNonExpired() {
            return true;
        }
        @Override
        public boolean isAccountNonLocked() {
            return true;
        }
        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }
        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
