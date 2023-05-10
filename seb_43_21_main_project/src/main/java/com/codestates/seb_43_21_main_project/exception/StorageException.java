package com.codestates.seb_43_21_main_project.exception;

public class StorageException extends  RuntimeException {
    public StorageException(String message){
        super(message);
    }

    public  StorageException(String message, Throwable cause){
        super(message, cause);
    }
}
