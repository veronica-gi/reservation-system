import { useEffect, useState } from "react";
import { getServices } from "../api/api";

export const useServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    getServices()
      .then(data => setServices(data))
      .catch(err => console.error(err));
  }, []);

  return services;
};