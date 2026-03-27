import { useState, useEffect } from "react";

function ServiceForm({ onAdd, onUpdate, editingService, onCancel }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Cuando cambiamos de servicio a editar, rellenamos el formulario
  useEffect(() => {
    if (editingService) {
      setName(editingService.name || "");
      setPrice(editingService.price || "");
    }
  }, [editingService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceData = { name, price: Number(price) };

    if (editingService) {
      onUpdate(editingService.id, serviceData);
    } else {
      onAdd(serviceData);
    }

    setName("");
    setPrice("");
  };

  const handleCancel = () => {
    setName("");
    setPrice("");
    if (onCancel) onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className={`service-form ${editingService ? "editing" : ""}`}>
      <h3 className="section-title">
        {editingService ? "Editar Servicio" : "Agregar Servicio"}
      </h3>
      
      <input
        type="text"
        placeholder="Nombre del servicio"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        min={0}
      />
      <div className="buttons">
        <button type="submit">{editingService ? "Actualizar" : "Agregar"}</button>
        {editingService && (
          <button type="button" className="cancel" onClick={handleCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default ServiceForm;