function ServiceList({ services }) {
  return (
    <ul>
      {services.map(s => (
        <li key={s.id} className="service-item">
          <span className="service-name">{s.name}</span>
          <span className="service-price">{s.price}€</span>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;