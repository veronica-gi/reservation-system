function ServiceList({ services }) {
  return (
    <ul>
      {services.map(s => (
        <li key={s.id}>
          {s.name} - {s.price}€
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;