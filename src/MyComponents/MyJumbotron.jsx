import { Button } from "react-bootstrap";

function MyJumbotron() {
  return (
    <div className="my-5">
      <h1>Horror Books</h1>
      <p>
        This is a horror book online store, you can find hundreds of books here, just start scrolling down below and
        choose your favorites
      </p>
      <p>
        <Button variant="primary">Cart </Button>
      </p>
      <hr />
    </div>
  );
}

export default MyJumbotron;
