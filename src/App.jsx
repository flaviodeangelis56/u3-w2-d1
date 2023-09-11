import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./MyComponents/MyNavBar";
import MyFooter from "./MyComponents/MyFooter";
import MyJumbotron from "./MyComponents/MyJumbotron";
import books from "./books/horror.json";
import BookList from "./MyComponents/BookList";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./MyComponents/CommentArea";
class App extends Component {
  state = {
    selected: false,
    asin: "",
  };
  selectABook = (isSelected, asin) => {
    this.setState({ selected: isSelected, asin });
  };
  render() {
    return (
      <div className="App">
        <MyNavBar />

        <MyJumbotron />
        <Container>
          <Row>
            <Col xs={6}>
              <BookList
                HorrorBooks={books}
                selected={this.state.selected}
                selectABook={this.selectABook}
                asinSelected={this.state.asin}
              />
            </Col>
            <Col xs={6}>
              <CommentArea asinSelected={this.state.asin} />
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}

export default App;
