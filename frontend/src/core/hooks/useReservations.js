import { useEffect, useState } from "react";
import { getReservations, createReservation, deleteReservation, updateReservation as updateReservationApi } from "../api/api";

export const useReservations = () => {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = () => {
    getReservations()
      .then(data => setReservations(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const addReservation = (reservation) => {
    return createReservation(reservation)
      .then(() => fetchReservations());
  };

  const removeReservation = (id) => {
    return deleteReservation(id)
      .then(() => fetchReservations());
  };

   const updateReservation = (id, reservation) => {
    return updateReservationApi(id, reservation)
      .then(() => fetchReservations());
  };

  return { reservations, addReservation, removeReservation, updateReservation };
};