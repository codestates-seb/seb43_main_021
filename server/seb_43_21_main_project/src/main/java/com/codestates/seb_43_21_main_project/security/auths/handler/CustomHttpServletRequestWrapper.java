package com.codestates.seb_43_21_main_project.security.auths.handler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;

public class CustomHttpServletRequestWrapper extends HttpServletRequestWrapper {

    private final String remoteAddr;

    public CustomHttpServletRequestWrapper(HttpServletRequest request) {
        super(request);
        String addr = request.getHeader("X-Real-IP");
        if (addr == null) {
            addr = request.getHeader("X-Forwarded-For");
            if (addr != null) {
                addr = addr.split(",")[0];
            }
        }
        if (addr == null) {
            addr = request.getRemoteAddr();
        }
        remoteAddr = addr;
    }
    @Override
    public String getRemoteAddr() {
        return remoteAddr;
    }
}
