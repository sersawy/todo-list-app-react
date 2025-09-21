import { Form, Button, Card } from 'react-bootstrap';
const AddTodo = (props) => {
  const { AddTodoL } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    AddTodoL(title);
    console.log(title);
    e.target.reset();
  };
  return (
    <Card className="p-3 shadow-sm rounded">
      <h4 className="mb-3">Add Todo</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="todoTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter todo title" name="title" required />
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Add Todo
        </Button>
      </Form>
    </Card>
  );
};

export default AddTodo;
