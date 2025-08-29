package com.eduardoreinert.domus.dtos;

import jakarta.validation.constraints.NotBlank;

public record UserDTO(
        @NotBlank String email) {
}
