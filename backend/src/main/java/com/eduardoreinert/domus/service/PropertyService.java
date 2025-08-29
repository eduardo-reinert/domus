package com.eduardoreinert.domus.service;

import com.eduardoreinert.domus.dtos.PropertyDTO;
import com.eduardoreinert.domus.exception.PostgresException;
import com.eduardoreinert.domus.model.Property;
import com.eduardoreinert.domus.model.User;
import com.eduardoreinert.domus.repository.PropertyRepository;
import com.eduardoreinert.domus.repository.UserRepository;
import jakarta.validation.constraints.NotBlank;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    private final PropertyRepository propertyRepository;
    private final UserRepository userRepository;

    public PropertyService(PropertyRepository propertyRepository, UserRepository userRepository) {
        this.propertyRepository = propertyRepository;
        this.userRepository = userRepository;
    }

    public void createProperty(PropertyDTO dto) {
        Property property = new Property();
        property.setAddress(dto.getAddress());
        property.setSizeM2(dto.getSizeM2());
        property.setCubNumber(dto.getCubNumber());
        property.setTotalInstallments(dto.getTotalInstallments());
        property.setExtra(dto.getExtra());

        //TODO add real user binding (application is all at one for now)
        User user = userRepository.findByEmail("teste@mail.com");

        property.setUser(user);

        Property saved = propertyRepository.save(property);

        if (saved == null) {
            throw new PostgresException("There was a problem persisting data in database. Please consult the devs.");
        }
    }

    public List<PropertyDTO> getAllProperties(@NotBlank String email) {
        //TODO add real user binding (application is all at one for now)
        User user = userRepository.findByEmail(email);

        List<Property> properties = propertyRepository.findByUserId(user.getId());

        if (properties.isEmpty()) {
            return null;
        }

        return properties.stream()
                .map(p -> new PropertyDTO(p.getAddress(), p.getSizeM2(), p.getCubNumber(), p.getTotalInstallments(), p.getExtra()))
                .toList();
    }
}
