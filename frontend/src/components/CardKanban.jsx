import React from "react";

const CardKanban = ({ cliente }) => {
  return (
    <div className="card-kanban">
      <h3>{cliente.nome}</h3>
      <p>{cliente.status}</p>
    </div>
  );
};

export default CardKanban;