package com.codestates.seb_43_21_main_project.bidItem.repository;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BidItemRepository extends JpaRepository<BidItem, Long> {
    List<BidItem> findAllByMember(Member member);
}
