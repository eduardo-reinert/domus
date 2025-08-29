package com.eduardoreinert.domus.repository;

import com.eduardoreinert.domus.model.Installment;
import com.eduardoreinert.domus.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstallmentRepository extends JpaRepository<Installment, Long> {

    List<Installment> findByProperty(Property property);
}
