function ReservationList({ reservations, onDelete }) {
  return (
    <ul>
      {reservations.map(r => (
        <li key={r.id}>
          {r.clientName} - {r.service?.name} - {new Date(r.date).toLocaleString()}
          <button onClick={() => onDelete(r.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ReservationList;