import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import TodoCard from '../TodoCard/TodoCard';

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);
  const AddTodoL = (todo) => {
    setTodoList([...todoList, { id: (todoList.at(-1)?.id ?? 0) + 1, title: todo, completed: false }]);
    console.log(todoList);
  };
  const handleComplete = (id) => {
    setTodoList(todoList.map((todo) => (todo.id == id ? { ...todo, completed: !todo.completed } : todo)));
  };
  const handleDelete = (id) => setTodoList(todoList.filter((todo) => todo.id != id));
  return (
    <>
      <div className="container">
        <AddTodo AddTodoL={AddTodoL} />
        {todoList.map((todo, index) => (
          <TodoCard key={index} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
        ))}
      </div>
    </>
  );
};

export default Home;
