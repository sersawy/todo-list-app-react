import { Button, Card } from 'react-bootstrap';

const TodoCard = (props) => {
  const { todo, handleComplete, handleDelete } = props;
  return (
    <Card
      key={todo.id}
      className={`p-3 mb-2 d-flex flex-row justify-content-between align-items-center shadow-sm ${
        todo?.completed ? 'bg-light text-muted' : ''
      }`}
    >
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          fontWeight: '500',
        }}
      >
        {todo?.title}
      </span>
      <div>
        <Button
          variant={todo?.completed ? 'warning' : 'success'}
          size="sm"
          className="me-2"
          onClick={() => handleComplete(todo.id)}
        >
          {todo?.completed ? 'Undo' : 'Complete'}
        </Button>
        <Button variant="danger" size="sm" onClick={() => handleDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TodoCard;
