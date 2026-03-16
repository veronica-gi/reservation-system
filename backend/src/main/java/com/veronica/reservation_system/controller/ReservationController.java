package com.veronica.reservation_system.controller;

import com.veronica.reservation_system.model.Reservation;
import com.veronica.reservation_system.model.Service;
import com.veronica.reservation_system.repository.ServiceRepository;
import com.veronica.reservation_system.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
public class ReservationController {

    private final ReservationService reservationService;

    @Autowired
    private ServiceRepository serviceRepository;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    // Obtener todas las reservas
    @GetMapping
    public List<Reservation> getAllReservations() {
        return reservationService.getAllReservations();
    }

    // Obtener reserva por ID
    @GetMapping("/{id}")
    public Optional<Reservation> getReservationById(@PathVariable Long id) {
        return reservationService.getReservationById(id);
    }

    // Crear o actualizar reserva
    @PostMapping
    public Reservation saveReservation(@RequestBody Reservation reservation) {
        // Si viene un service con id, buscamos el objeto real en DB
        if (reservation.getService() != null && reservation.getService().getId() != null) {
            Service s = serviceRepository.findById(reservation.getService().getId()).orElse(null);
            reservation.setService(s);
        }
        return reservationService.saveReservation(reservation);
    }

    // Eliminar reserva
    @DeleteMapping("/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationService.deleteReservation(id);
    }
}