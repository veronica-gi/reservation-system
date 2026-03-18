import { useEffect, useState } from "react";

function App() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/services")
      .then(res => res.json())
      .then(data => {
        console.log(data); // para comprobar
        setServices(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Servicios</h1>

      <ul>
        {services.map(service => (
          <li key={service.id}>
            {service.name} - {service.price}€
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;
