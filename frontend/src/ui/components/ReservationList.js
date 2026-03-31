function ReservationList({ reservations, onDelete, onEdit }) {

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
        <li key={r.id}>

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