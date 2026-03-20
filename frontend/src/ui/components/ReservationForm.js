import { useState } from "react";

function ReservationForm({ services, onAdd }) {
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [serviceId, setServiceId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!clientName || !date || !serviceId) return;

    onAdd({
      clientName,
      date,
      service: { id: serviceId }
    });

    setClientName("");
    setDate("");
    setServiceId("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Nombre"
        value={clientName}
        onChange={(e) => setClientName(e.target.value)}
        required
      />

      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <select
        value={serviceId}
        onChange={(e) => setServiceId(e.target.value)}
        required
      >
        <option value="">Selecciona servicio</option>
        {services.map(s => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <button type="submit">Reservar</button>

    </form>
  );
}

export default ReservationForm;