import React, { useState } from "react";
import { useEffect } from "react";
import Nav from "~/components/Nav";

interface Todo {
  key: string;
  value: string;
}

export default function Blobs() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodos();

    async function getTodos() {
      setLoading(true);
      const response = await fetch("/.netlify/functions/blob", {
        method: "GET",
      });
      const data = await response.json();
      setTodos(data);
      setLoading(false);
    }
  }, []);

  async function updateTodos(t: Todo[]) {
    await fetch("/.netlify/functions/blob", {
      method: "PUT",
      body: JSON.stringify(t),
    });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim() !== "") {
      const newTodos = [
        ...todos,
        { key: new Date().toISOString(), value: newTodo },
      ];
      setTodos(newTodos);
      updateTodos(newTodos);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = async (key: string) => {
    const t = todos.filter((todo) => todo.key !== key);
    updateTodos(t);
    setTodos(t);
  };

  return (
    <div>
      <Nav title="Blob Storage" />
      <h1>Todo List</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      {!loading && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.key}>
              {todo.value}
              <button onClick={() => handleDeleteTodo(todo.key)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
