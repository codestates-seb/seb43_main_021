package com.codestates.seb_43_21_main_project.auctionItem.repository;


import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AuctionRepository extends JpaRepository<Auction, Long> {

    Page<Auction> findByAuctionItemIdLessThanEqualOrderByAuctionItemIdDesc(Long lastItemId, Pageable pageable);

}