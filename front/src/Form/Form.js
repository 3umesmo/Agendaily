import React, { useState } from "react";

const Form = () => {
  // Estados para armazenar os valores dos inputs
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // Função que é chamada ao clicar no botão "Adicionar"
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que a página recarregue

    console.log("Título:", title);
    console.log("Data/Horário:", date);

    // Aqui você pode fazer qualquer coisa com os valores, como enviá-los para um backend

    // Limpa os campos após a submissão
    setTitle("");
    setDate("");
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Adicionar item na lista</legend>
              <div className="mb-3">
                <label htmlFor="titleInput" className="form-label">
                  Tarefa
                </label>
                <input
                  type="text"
                  id="titleInput"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="dateInput" className="form-label">
                  Data / horário
                </label>
                <input
                  type="datetime-local"
                  id="dateInput"
                  className="form-control"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Adicionar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
