import { useState } from "react";
import Item from "../Item/Item";

const List = () => {
  // Estado para armazenar os itens da lista
  const [items, setItems] = useState([
    { id: 1, title: "Estudar React", date: "14/03/2025 - 12:30" },
    { id: 2, title: "Fazer Exercícios", date: "15/03/2025 - 10:00" },
  ]);

  // Função para remover um item da lista
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Função para editar um item (exemplo simples)
  const handleEdit = (id) => {
    const novoTitulo = prompt("Novo título:");
    if (novoTitulo) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, title: novoTitulo } : item
        )
      );
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      ) : (
        <p>Nenhuma tarefa adicionada.</p>
      )}
    </div>
  );
};

export default List;
