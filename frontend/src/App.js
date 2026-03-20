import { useServices } from "./core/hooks/useServices";
import { useReservations } from "./core/hooks/useReservations";
import ServiceList from "./ui/components/ServiceList";
import ReservationForm from "./ui/components/ReservationForm";
import ReservationList from "./ui/components/ReservationList";

function App() {

  const services = useServices();
  const { reservations, addReservation, removeReservation } = useReservations();

  return (
    <div>
      <h1>Sistema de reservas</h1>

      <h2>Servicios</h2>
      <ServiceList services={services} />

      <h2>Nueva reserva</h2>
      <ReservationForm services={services} onAdd={addReservation} />

      <h2>Reservas existentes</h2>
      <ReservationList 
        reservations={reservations} 
        onDelete={removeReservation} 
      />


    </div>
  );
}

export default App;