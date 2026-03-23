import { useServices } from "./core/hooks/useServices";
import { useReservations } from "./core/hooks/useReservations";
import ServiceList from "./ui/components/ServiceList";
import ReservationForm from "./ui/components/ReservationForm";
import ReservationList from "./ui/components/ReservationList";
import "./App.css";

function App() {

  const services = useServices();
  const { reservations, addReservation, removeReservation } = useReservations();

  return (
    <div>
      <h1>Sistema de reservas</h1>

      <div className="section">
        <h2>Servicios</h2>
        <ServiceList services={services} />
      </div>

      <div className="section">
        <h2>Nueva reserva</h2>
        <ReservationForm services={services} onAdd={addReservation} />
      </div>

      <div className="section">
        <h2>Reservas existentes</h2>
        <ReservationList 
          reservations={reservations} 
          onDelete={removeReservation} 
        />
      </div>

    </div>
  );
}

export default App;