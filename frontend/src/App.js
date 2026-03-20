import { useServices } from "./core/hooks/useServices";
import { useReservations } from "./core/hooks/useReservations";
import ServiceList from "./ui/components/ServiceList";
import ReservationForm from "./ui/components/ReservationForm";

function App() {

  const services = useServices();
  const { addReservation } = useReservations();

  return (
    <div>
      <h1>Sistema de reservas</h1>

      <h2>Servicios</h2>
      <ServiceList services={services} />

      <h2>Nueva reserva</h2>
      <ReservationForm services={services} onAdd={addReservation} />

    </div>
  );
}

export default App;