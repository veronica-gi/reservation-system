package com.veronica.reservation_system.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String clientName;

    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "service_id")
    private Service service;

    public Reservation() {}

    public Reservation(String clientName, LocalDateTime date, Service service) {
        this.clientName = clientName;
        this.date = date;
        this.service = service;
    }

    public Long getId() { return id; }
    public String getClientName() { return clientName; }
    public LocalDateTime getDate() { return date; }
    public Service getService() { return service; }

    public void setClientName(String clientName) { this.clientName = clientName; }
    public void setDate(LocalDateTime date) { this.date = date; }
    public void setService(Service service) { this.service = service; }
}