function ReservationList({ reservations, onDelete, onEdit }) {

  const today = new Date();

  // Función para comprobar si la reserva es del día de hoy
  const isToday = (reservationDate) => {
    const d = new Date(reservationDate);
    return (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta reserva?")) {
      onDelete(id);
    }
  };

  return (
    <ul>
      {reservations
       .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(r => (
        <li key={r.id} className={isToday(r.date) ? "today" : ""}>

  <span className="reservation-info">
   <span className="reservation-client">{r.clientName}</span>
          <span className="arrow">→</span>
    <span className="reservation-service">{r.service?.name}</span>
    <span className="reservation-date">📅 {new Date(r.date).toLocaleString()}</span>
  </span>

  <div className="actions">
    <button onClick={() => onEdit(r)}>Editar</button>
    <button onClick={() => handleDelete(r.id)}>Eliminar</button>
  </div>
</li>
      ))}
    </ul>
  );
}

export default ReservationList;