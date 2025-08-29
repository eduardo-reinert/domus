package com.eduardoreinert.domus.controller;

import com.eduardoreinert.domus.exception.InvalidIdException;
import com.eduardoreinert.domus.service.InstallmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/installments")
public class InstallmentController {

    private final InstallmentService service;

    public InstallmentController(InstallmentService service) {
        this.service = service;
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<?> getInstallments(@PathVariable String propertyId) {
        try {
            Integer id = Integer.parseInt(propertyId);
        } catch (Exception e) {
            throw new InvalidIdException("ID not valid; it must be a number");
        }
        return new ResponseEntity<>(service.returnInstallments(Integer.parseInt(propertyId)), HttpStatus.OK);
    }
}
