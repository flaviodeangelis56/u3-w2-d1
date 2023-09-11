import { Component } from "react";
import { Button, Container, Form, InputGroup, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    bookName: "",
  };
  filterBookList = event => {
    event.preventDefault();
    const serchedBook = document.getElementById("serchBar").value;
    this.setState({ bookName: serchedBook });
  };
  render() {
    return (
      <Container>
        <InputGroup className="mb-3">
          <Form onSubmit={this.filterBookList}>
            <Form.Group className="mb-3">
              <Form.Label>Serch a Book</Form.Label>
              <Form.Control type="text" id="serchBar" />
            </Form.Group>
            <Button type="submit">Serch</Button>
          </Form>
        </InputGroup>
        <Row>
          {this.props.HorrorBooks.filter(book =>
            book.title.toLowerCase().includes(this.state.bookName.toLowerCase())
          ).map((book, i) => (
            <SingleBook
              HorrorBook={book}
              key={i}
              selected={this.props.selected}
              selectABook={this.props.selectABook}
              asinSelected={this.props.asinSelected}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
