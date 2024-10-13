'use client'
import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import Sidebar from '../components/Sidebar';

export default function TodoPage() {
  const [newTodo, setNewTodo] = useState('');
  const [showState, setShowState] = useState(false);
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodoStore();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        
        <div className="mb-4">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="border p-2 mr-2"
            placeholder="Add new todo"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Todo
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map(todo => (
            <li key={todo.id} className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'line-through' : ''}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="ml-auto bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button
            onClick={() => setShowState(!showState)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {showState ? '상태 숨기기' : '상태 보기'}
          </button>
          
          {showState && (
            <pre className="mt-4 p-4 bg-gray-100 rounded overflow-auto">
              {JSON.stringify(todos, null, 2)}
            </pre>
          )}
        </div>
      </main>
    </div>
  );
}
