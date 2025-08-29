package com.eduardoreinert.domus.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PropertyDTO {

    @NotNull(message = "address cannot be null")
    @Size(min = 6, max = 255, message = "Address must be 6-255 characters")
    private String address;

    @NotNull(message = "size m2 cannot be null")
    @JsonProperty("size_m2")
    private Double sizeM2;

    @NotNull(message = "cube number cannot be null")
    @JsonProperty("cub_number")
    private Double cubNumber;

    @NotNull(message = "total installments cannot be null")
    @JsonProperty("total_installments")
    private Integer totalInstallments;

    @Max(value = 1000, message = "Extras must have at most 1000 characters")
    private String extra;
}
