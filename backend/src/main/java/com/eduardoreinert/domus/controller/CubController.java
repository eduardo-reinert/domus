package com.eduardoreinert.domus.controller;

import com.eduardoreinert.domus.service.CubService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value = "/cub")
public class CubController {

    private final CubService cubService;

    public CubController(CubService cubService) {
        this.cubService = cubService;
    }

    @GetMapping
    public ResponseEntity<?> getCubMapFromCurrentYear() {
        return new ResponseEntity<>(cubService.getCubMapFromCurrentYear(), HttpStatus.OK);
    }
}
