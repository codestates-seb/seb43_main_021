package com.codestates.seb_43_21_main_project.auctionItem.service;

import com.codestates.seb_43_21_main_project.exception.StorageException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

@Slf4j
@Service

public class FileSystemStorageService implements StorageService {
    private final Path rootLocation = Paths.get("C:\\Img"); //파일을 저장하는 루트 경로


    @Override
    public void store(MultipartFile file) { //파일을 로컬에 저장하는 로직
        try {
            if (file.isEmpty()) {
                throw new StorageException("Failed to store empty file.");
            }
            Path destinationFile = this.rootLocation.resolve(
                    Paths.get(file.getOriginalFilename())).normalize().toAbsolutePath();

            if (!destinationFile.getParent().equals(this.rootLocation.toAbsolutePath())) {

                throw new StorageException(
                        "Cannot store file outside current directory.");
            }

            try (InputStream inputStream = file.getInputStream()) {
                log.info("# store auction Image");
                // 파일 저장

                Files.copy(inputStream, destinationFile, StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (IOException e) {
            // 파일 저장 중에 예외 발생
            throw new StorageException("Filed to Store file.", e);
        }
    }


}
