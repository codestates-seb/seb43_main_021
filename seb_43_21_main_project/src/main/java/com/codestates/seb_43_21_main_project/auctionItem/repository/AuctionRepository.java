package com.codestates.seb_43_21_main_project.auctionItem.repository;


import com.codestates.seb_43_21_main_project.auctionItem.entity.Auction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionRepository extends JpaRepository<Auction, Long> {

}
