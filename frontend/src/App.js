import { useState } from "react";
import { useReservations } from "./core/hooks/useReservations";
import { useServices } from "./core/hooks/useServices";

function App() {

  const services = useServices();
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [serviceId, setServiceId] = useState("");
  const { addReservation } = useReservations();

    // Crear reserva usando core/api
  const handleSubmit = (e) => {
    e.preventDefault();

    const reservation = {
      clientName,
      date,
      service: { id: serviceId }
    };

    addReservation(reservation)
      .then(() => {
        alert("Reserva creada correctamente");
        // Limpiar formulario
        setClientName("");
        setDate("");
        setServiceId("");
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Sistema de reservas</h1>

      <h2>Servicios</h2>
      <ul>
        {services.map(s => (
          <li key={s.id}>
            {s.name} - {s.price}€
          </li>
        ))}
      </ul>

      <h2>Nueva reserva</h2>
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

    </div>
  );
}

export default App;