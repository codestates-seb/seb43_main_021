package com.codestates.seb_43_21_main_project.bidItem.repository;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidItemRepository extends JpaRepository<BidItem,Long> {

    Page<BidItem> findBidItemAll(Long lastBidItemId, Pageable pageable);
}
