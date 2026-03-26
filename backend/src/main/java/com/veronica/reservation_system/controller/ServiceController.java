package com.veronica.reservation_system.controller;

import com.veronica.reservation_system.model.Service;
import com.veronica.reservation_system.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
public class ServiceController {

    @Autowired
    private ServiceRepository serviceRepository;


        // Obtener todos los servicios
        @GetMapping
        public List<Service> getAllServices() {
            return serviceRepository.findAll();
        }

        // Crear servicio
        @PostMapping
        public Service createService(@RequestBody Service service) {
            return serviceRepository.save(service);
        }

        // Editar servicio
        @PutMapping("/{id}")
        public Service updateService(@PathVariable Long id, @RequestBody Service updated) {
            Service existing = serviceRepository.findById(id).orElseThrow();

            existing.setName(updated.getName());
            existing.setPrice(updated.getPrice());

            return serviceRepository.save(existing);
        }

        // Eliminar servicio
        @DeleteMapping("/{id}")
        public void deleteService(@PathVariable Long id) {
            serviceRepository.deleteById(id);
        }
    }