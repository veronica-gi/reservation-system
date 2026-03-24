import { useState, useEffect } from "react";

function ReservationForm({ services, onAdd, editingReservation, onUpdate }) {

  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [serviceId, setServiceId] = useState("");

  useEffect(() => {
    if (editingReservation) {
      setClientName(editingReservation.clientName || "");
      setDate(
  editingReservation.date 
    ? editingReservation.date.slice(0, 16) 
    : ""
);
      setServiceId(editingReservation.service?.id || "");
    }
  }, [editingReservation]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      clientName,
      date,
      service: { id: Number (serviceId) }
    };

    if (editingReservation) {
      onUpdate(editingReservation.id, reservation);
    } else {
      onAdd(reservation);
    }

    setClientName("");
    setDate("");
    setServiceId("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={clientName || ""}
        onChange={(e) => setClientName(e.target.value)}
      />

      <input
        type="datetime-local"
        value={date || ""}
        onChange={(e) => setDate(e.target.value)}
      />

      <select
        value={serviceId || ""}
        onChange={(e) => setServiceId(e.target.value)}
      >
        <option value="">Selecciona servicio</option>
        {services.map(s => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <button type="submit">
        {editingReservation ? "Actualizar" : "Reservar"}
      </button>
    </form>
  );
}

export default ReservationForm;