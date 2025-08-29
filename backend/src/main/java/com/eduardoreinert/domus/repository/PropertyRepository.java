package com.eduardoreinert.domus.repository;

import com.eduardoreinert.domus.model.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, String> {

    List<Property> findByUserId(Long userId);
}
