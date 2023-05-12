package com.codestates.seb_43_21_main_project.audit;


import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

@Getter
@MappedSuperclass // 공통 매핑 정보
@EntityListeners(AuditingEntityListener.class) // 해당 클래스에 Auditing 기능을 포함
public abstract class Auditable {

    // null 값 원인 찾기  --> @EnableJpaAuditing 추가하니 null값 안뜸
    @CreatedDate // Entity가 생성되어 저장될 때 시간이 자동 저장됨.
    @Column(updatable = false)
    private LocalDateTime createDate;

    @LastModifiedDate //조회한 Entity의 값을 변경할 때 시간이 자동 저장됨
    private  LocalDateTime modifiedDate;
}
