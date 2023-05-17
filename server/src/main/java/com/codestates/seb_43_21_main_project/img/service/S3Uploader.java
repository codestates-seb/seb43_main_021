package com.codestates.seb_43_21_main_project.img.service;

import com.amazonaws.services.s3.AmazonS3Client;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.UUID;



@Slf4j
@RequiredArgsConstructor
@Component
public class S3Uploader {
    private final AmazonS3Client amazonS3Client;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

//    MultipartFile을 전달받아  File로 전환한 후 s3에 업로드 (S3는 MultipartDile 타입 전송 X)
   public String upload( MultipartFile multipartFile, String dirName) throws IOException {
       File uploadFile = convert(multipartFile)
               .orElseThrow(() -> new IllegalArgumentException("MultipartFile -> File로 전환이 실패했습니다."));

       return upload(uploadFile, dirName);
   }

    //s3로 파일 업로드

    private String upload(File uploadFile, String dirName) {
        String fileName = dirName + "/" + uploadFile.getName(); // s3에 저장될 파일이름 
        String uploadImageUrl = putS3(uploadFile, fileName); //s3로 업로드 

        removeNameFile(uploadFile); //로컬에 생성된  File 삭제(MultipartFile -> File 전환하여 로컬에 파일이 생성됨)
        return uploadImageUrl; //puts() 에서 업로드된 파일의 S3 URL 주소 반환
    }

    private String putS3(File uploadFile, String fileName) {
        amazonS3Client.putObject(
                new PutObjectRequest(bucket, fileName, uploadFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead)
        );
        return amazonS3Client.getUrl(bucket, fileName).toString();
    }

    private void removeNameFile(File targetFile) {
        if(targetFile.delete()){
            log.info("파일이 삭제되었습니다. ");
        } else {
            log.info("파일이 삭제되지 않았씁니다. ");
        }
    }

    private Optional<File> convert(MultipartFile file) throws IOException{
       File convertFile =  new File(file.getOriginalFilename());
       if(convertFile.createNewFile()){
           try(FileOutputStream fos = new FileOutputStream(convertFile)) {
               fos.write(file.getBytes());
           }
           return Optional.of(convertFile);
       }
       return  Optional.empty();
    }
}





