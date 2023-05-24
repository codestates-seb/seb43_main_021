package com.codestates.seb_43_21_main_project.image.controller;

import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPostDto;
import com.codestates.seb_43_21_main_project.image.utils.S3Uploader;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@CrossOrigin(originPatterns = "*")
@RestController
@RequestMapping("/images")
@Slf4j
@Validated
public class ImageController {
    @Autowired
    private S3Uploader s3Uploader;

    @PostMapping("/upload/bid_item")
    public String imageUpload( MultipartFile multipartFile) {
        try {
            String imageUrl = s3Uploader.upload(multipartFile);
            return imageUrl;
        } catch (IOException e) {
            log.error("Failed to upload image", e);
            return "Failed to upload image";
        }
    }

}
