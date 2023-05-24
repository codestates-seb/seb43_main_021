package com.codestates.seb_43_21_main_project.image.repository;

import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import com.codestates.seb_43_21_main_project.image.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
    List<Image> findAllByBidItem(BidItem bidItem);

}