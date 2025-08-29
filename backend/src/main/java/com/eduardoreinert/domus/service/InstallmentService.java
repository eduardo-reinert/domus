package com.eduardoreinert.domus.service;

import com.eduardoreinert.domus.dtos.InstallmentDTO;
import com.eduardoreinert.domus.model.Installment;
import com.eduardoreinert.domus.model.Property;
import com.eduardoreinert.domus.repository.InstallmentRepository;
import com.eduardoreinert.domus.repository.PropertyRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class InstallmentService {

    private final PropertyRepository propertyRepository;
    private final InstallmentRepository installmentRepository;

    public InstallmentService(PropertyRepository propertyRepository, InstallmentRepository installmentRepository) {
        this.propertyRepository = propertyRepository;
        this.installmentRepository = installmentRepository;
    }

    public HashMap<Property, List<InstallmentDTO>> returnInstallments(Integer propertyId) {
        HashMap<Property, List<InstallmentDTO>> info = new HashMap<>();

        Optional<Property> property = propertyRepository.findById(propertyId.toString());
        if (property.isPresent()) {
            List<Installment> installments = installmentRepository.findByProperty(property.get());
            List<InstallmentDTO> installmentDTOList = installments.stream()
                    .map(i -> new InstallmentDTO(i.getNumber(), i.getDueDate(), i.getIsPaid()))
                    .toList();
            info.put(property.get(), installmentDTOList);
        }
        return info;
    }

}