package com.eduardoreinert.domus.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "property")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name="address", nullable = false)
    private String address;

    @Column(name="size_m2", nullable = false)
    private Double sizeM2;

    @Column(name="cub_number", nullable = false)
    private Double cubNumber;

    @Column(name="total_installments", nullable = false)
    private Integer totalInstallments;

    @Column(name="extras")
    private String extra;
}
