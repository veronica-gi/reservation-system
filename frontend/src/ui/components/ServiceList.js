function ServiceList({ services, onEdit, onDelete }) {
  const handleDelete = (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este servicio?")) {
      onDelete(id);
    }
  };

  return (
    <ul>
      {services.map((s) => (
        <li key={s.id} className="service-item">
  <div className="service-name">{s.name}</div>
  <div className="service-price">${s.price}</div>
  <div className="service-actions">
    <button onClick={() => onEdit(s)}>Editar</button>
    <button onClick={() => handleDelete(s.id)}>Eliminar</button>
  </div>
</li>
      ))}
    </ul>
  );
}

export default ServiceList;