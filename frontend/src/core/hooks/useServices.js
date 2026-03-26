import { useEffect, useState } from "react";
import { getServices } from "../api/api";

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Función para cargar o recargar los servicios
  const refreshServices = () => {
    setLoading(true);
    setError(null);
    getServices()
      .then(data => setServices(data))
      .catch(err => {
        console.error(err);
        setError("No se pudieron cargar los servicios.");
      })
      .finally(() => setLoading(false));
  };

  // Se ejecuta al montar el hook
  useEffect(() => {
    refreshServices();
  }, []);

  return { services, loading, error, refreshServices };
};