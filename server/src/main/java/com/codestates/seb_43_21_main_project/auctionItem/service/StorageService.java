package com.codestates.seb_43_21_main_project.auctionItem.service;

import org.springframework.web.multipart.MultipartFile;

public interface StorageService {
    void store(MultipartFile file);
}
