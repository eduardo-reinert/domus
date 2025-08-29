package com.eduardoreinert.domus.controller;

import com.eduardoreinert.domus.dtos.PropertyDTO;
import com.eduardoreinert.domus.dtos.UserDTO;
import com.eduardoreinert.domus.service.PropertyService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/properties")
public class PropertyController {

    private final PropertyService service;

    public PropertyController(PropertyService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<?> createProperty(@Valid @RequestBody PropertyDTO propertyDTO) {
        service.createProperty(propertyDTO);

        return new ResponseEntity<>("Real estate payment creation success", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllProperties(@Valid @RequestBody UserDTO userDTO) {

        return new ResponseEntity<>(service.getAllProperties(userDTO.email()),HttpStatus.OK);
    }


}
