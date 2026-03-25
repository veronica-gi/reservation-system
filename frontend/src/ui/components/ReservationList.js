function ReservationList({ reservations, onDelete, onEdit }) {

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta reserva?")) {
      onDelete(id);
    }
  };

  return (
    <ul>
      {reservations.map(r => (
        <li key={r.id}>
  <span className="reservation-info">
    {r.clientName} - {r.service?.name} - {new Date(r.date).toLocaleString()}
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