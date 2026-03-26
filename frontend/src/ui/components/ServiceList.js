function ServiceList({ services, onEdit, onDelete }) {
  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este servicio?")) {
      onDelete(id);
    }
  };

  return (
    <ul>
      {services.map((s) => (
        <li key={s.id}>
          <span className="service-name">{s.name}</span>
          <span className="service-price">${s.price}</span>
          <button onClick={() => onEdit(s)}>Editar</button>
          <button onClick={() => handleDelete(s.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;