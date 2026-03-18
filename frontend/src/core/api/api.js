const BASE_URL = "http://localhost:8080";

// Obtener todos los servicios
export const getServices = () => {
  return fetch(`${BASE_URL}/services`)
    .then(res => res.json());
};

// Crear una nueva reserva
export const createReservation = (reservation) => {
  return fetch(`${BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
    .then(res => res.json());
};