import React, { useState, useEffect } from 'react';
import { api } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => { fetchTodos(); }, []);
  const fetchTodos = async () => {
    const res = await api.get('/todos');
    setTodos(res.data);
  };
  const addTodo = async () => {
    if(!title) return;
    await api.post('/todos', { title, completed: false });
    setTitle(''); fetchTodos();
  };
  const toggle = async (t) => {
    await api.put(`/todos/${t.id}`, { title: t.title, completed: !t.completed });
    fetchTodos();
  };
  const del = async (id) => { await api.delete(`/todos/${id}`); fetchTodos(); };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>ToDo List</h1>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <input type="checkbox" checked={t.completed} onChange={() => toggle(t)} />
            {t.title}
            <button onClick={() => del(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
