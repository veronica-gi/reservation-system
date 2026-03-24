function ReservationList({ reservations, onDelete }) {

  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar esta reserva?")) {
      onDelete(id);
    }
  };

  return (
    <ul>
      {reservations.map(r => (
        <li key={r.id}>
          {r.clientName} - {r.service?.name} - {new Date(r.date).toLocaleString()}
          
          <button onClick={() => handleDelete(r.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReservationList;