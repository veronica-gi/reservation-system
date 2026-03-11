package com.veronica.reservation_system.service;

import com.veronica.reservation_system.model.Reservation;
import com.veronica.reservation_system.repository.ReservationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {

    private final ReservationRepository reservationRepository;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    // Guardar o actualizar una reserva
    public Reservation saveReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    // Obtener todas las reservas
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // Obtener reserva por ID
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }

    // Eliminar reserva por ID
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }
}