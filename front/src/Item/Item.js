import React from "react";

const Item = ({ title, date, id, onDelete, onEdit }) => {
  return (
    <div className="card my-2">
      <div className="card-body">
        <h3>{title}</h3>
        <p>{date}</p>
        <div>
          <button className="btn btn-warning me-2" onClick={() => onEdit(id)}>
            Editar
          </button>
          <button className="btn btn-danger" onClick={() => onDelete(id)}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
