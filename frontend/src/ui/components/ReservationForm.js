import { useState, useEffect } from "react";

function ReservationForm({ services, onAdd, editingReservation, onUpdate, onCancel }) {

  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [serviceId, setServiceId] = useState("");

   // Estado para errores
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingReservation) {
      setClientName(editingReservation.clientName || "");
      setDate(
  editingReservation.date 
    ? editingReservation.date.slice(0, 16) 
    : ""
);
      setServiceId(editingReservation.service?.id || "");
    }
  }, [editingReservation]);

   const validate = () => {
    const newErrors = {};
    if (!clientName.trim()) newErrors.clientName = "El nombre del cliente es obligatorio.";
    if (!date) newErrors.date = "Debes seleccionar fecha y hora.";
    if (!serviceId) newErrors.serviceId = "Debes seleccionar un servicio.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const reservation = {
      clientName,
      date,
      service: { id: Number (serviceId) }
    };

    if (editingReservation) {
      onUpdate(editingReservation.id, reservation);
    } else {
      onAdd(reservation);
    }

    setClientName("");
    setDate("");
    setServiceId("");
  };

  const resetForm = () => {
  setClientName("");
  setDate("");
  setServiceId("");
};

 return (
  <>
    
    {editingReservation && (
      <p className="editing-banner">
        Editando reserva de {editingReservation.clientName}
      </p>
    )}
    
    <form 
      onSubmit={handleSubmit}
      className={`reservation-form ${editingReservation ? "editing" : ""}`}
    >
      <input
        type="text"
        placeholder="Nombre"
        value={clientName || ""}
        onChange={(e) => setClientName(e.target.value)}
      />
      {errors.clientName && <span className="error">{errors.clientName}</span>}

      <input
        type="datetime-local"
        value={date || ""}
        onChange={(e) => setDate(e.target.value)}
      />
      {errors.date && <span className="error">{errors.date}</span>}

      <select
        value={serviceId || ""}
        onChange={(e) => setServiceId(e.target.value)}
      >
        <option value="">Selecciona servicio</option>
        {services.map(s => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>
      {errors.serviceId && <span className="error">{errors.serviceId}</span>}

      <button type="submit">
        {editingReservation ? "Actualizar" : "Reservar"}
      </button>

      {/* BOTÓN CANCELAR */}
      {editingReservation && (
        <button type="button" onClick={() => {resetForm(); onCancel();}} className="cancel">
          Cancelar
        </button>
      )}
    </form>
  </>
);
}

export default ReservationForm;