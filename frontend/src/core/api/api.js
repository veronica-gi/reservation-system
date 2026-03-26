const BASE_URL = "http://localhost:8080";

// ==================== Servicios ====================

export const getServices = () => {
  return fetch(`${BASE_URL}/services`)
    .then(res => res.json());
};

// Crear un nuevo servicio
export const createService = (service) => {
  return fetch(`${BASE_URL}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(service),
  }).then(res => res.json());
};

// Actualizar un servicio existente
export const updateService = (id, service) => {
  return fetch(`${BASE_URL}/services/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(service),
  }).then(res => res.json());
};

// Eliminar un servicio
export const deleteService = (id) => {
  return fetch(`${BASE_URL}/services/${id}`, {
    method: "DELETE",
  });
};

// ==================== Reservas ====================

export const getReservations = () => {
  return fetch(`${BASE_URL}/reservations`)
    .then(res => res.json());
};

export const createReservation = (reservation) => {
  return fetch(`${BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  }).then(res => res.json());
};

export const deleteReservation = (id) => {
  return fetch(`${BASE_URL}/reservations/${id}`, {
    method: "DELETE"
  });
};

export const updateReservation = (id, reservation) => {
  return fetch(`${BASE_URL}/reservations/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  }).then(res => res.json());
};