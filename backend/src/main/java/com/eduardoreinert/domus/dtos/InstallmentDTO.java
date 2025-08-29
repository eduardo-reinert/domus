package com.eduardoreinert.domus.dtos;

import java.time.LocalDate;

public record InstallmentDTO(Integer number, LocalDate dueDate, Boolean isPaid) {
}
