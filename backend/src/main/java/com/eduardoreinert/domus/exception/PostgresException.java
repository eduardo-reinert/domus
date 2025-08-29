package com.eduardoreinert.domus.exception;

public class PostgresException extends RuntimeException{

    public PostgresException(String message) {
        super(message);
    }
}
