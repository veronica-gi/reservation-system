import { useState } from "react";
import { useServices } from "./core/hooks/useServices";
import { useReservations } from "./core/hooks/useReservations";
import ServiceList from "./ui/components/ServiceList";
import ServiceForm from "./ui/components/ServiceForm";
import ReservationForm from "./ui/components/ReservationForm";
import ReservationList from "./ui/components/ReservationList";
import "./App.css";

const BASE_URL = "http://localhost:8080";

function App() {
  const { services, loading, error, refreshServices } = useServices();
  const { 
    reservations, 
    addReservation, 
    removeReservation, 
    updateReservation 
  } = useReservations();

  const [editingReservation, setEditingReservation] = useState(null);
  const [editingService, setEditingService] = useState(null);

  // Para editar reserva
  const handleEditReservation = (reservation) => {
    setEditingReservation(reservation);
  };

  // Para editar servicio
  const handleEditService = (service) => {
    setEditingService(service);
  };

  // Función para eliminar un servicio
  const deleteService = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este servicio?")) {
      fetch(`${BASE_URL}/services/${id}`, { method: "DELETE" })
        .then(() => refreshServices())
        .catch(err => console.error(err));
    }
  };

  // Crear servicio
const createService = (data) => {
  fetch(`${BASE_URL}/services`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => refreshServices())
    .catch(err => console.error(err));
};

// Actualizar servicio
const updateService = (id, data) => {
  fetch(`${BASE_URL}/services/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then(() => {
      refreshServices();
      setEditingService(null);
    })
    .catch(err => console.error(err));
};

  return (
    <div>
      <h1>Sistema de reservas</h1>

      <div className="section">
        <h2>Servicios</h2>

        {loading && <p>Cargando servicios...</p>}
        {error && <p style={{color: "red"}}>{error}</p>}

        <ServiceList 
          services={services} 
          onEdit={handleEditService} 
          onDelete={deleteService} 
        />

        <ServiceForm 
          onAdd={createService} 
          onUpdate={updateService}
          editingService={editingService} 
          onCancel={() => setEditingService(null)}
        />
      </div>

      <div className="section">
        <h2>{editingReservation ? "Editar reserva" : "Nueva reserva"}</h2>

        <ReservationForm
          services={services}
          onAdd={addReservation}
          onUpdate={updateReservation}
          editingReservation={editingReservation}
          onCancel={() => setEditingReservation(null)}
        />
      </div>

      <div className="section">
        <h2>Reservas existentes</h2>
        <ReservationList 
          reservations={reservations} 
          onDelete={removeReservation}
          onEdit={handleEditReservation}
        />
      </div>
    </div>
  );
}

export default App;