package com.veronica.reservation_system.config;

import com.veronica.reservation_system.model.Service;
import com.veronica.reservation_system.repository.ServiceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final ServiceRepository serviceRepository;

    public DataLoader(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (serviceRepository.count() == 0) {
            serviceRepository.save(new Service(null, "Masaje", "Relajante", 50.0));
            serviceRepository.save(new Service(null, "Meditación", "Para la mente", 30.0));
            serviceRepository.save(new Service(null, "Fisioterapia", "Recuperación física", 60.0));
        }
    }
}