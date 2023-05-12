package com.codestates.seb_43_21_main_project.security.auths.handler;


import com.codestates.seb_43_21_main_project.member.entity.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * 로그인 성공시 핸들러
 */
@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Member member = (Member) authentication.getPrincipal();
        String clientIp = new CustomHttpServletRequestWrapper(request).getRemoteAddr();
        log.info(" # 로그인 성공" + " ID : " + member.getEmail() + " , 요청 IP : " + clientIp);

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();
        out.print("{\"result\": \"success\"}");
        out.flush();
    }
}
