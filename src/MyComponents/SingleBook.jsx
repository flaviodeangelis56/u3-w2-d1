import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  render() {
    return (
      <Col xs={6} className="mb-5" key={`book-${this.props.HorrorBook.title}`}>
        <Card
          id={this.props.HorrorBook.asin}
          style={{ minHeight: "550px" }}
          className={this.props.asinSelected === this.props.HorrorBook.asin ? "borderRed" : ""}
        >
          <Card.Img
            variant="top"
            src={this.props.HorrorBook.img}
            style={{ width: "objectfit", height: "400px" }}
            onClick={() => {
              this.props.selectABook(!this.props.selected, this.props.HorrorBook.asin);
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.HorrorBook.title}</Card.Title>
            {/* {this.props.selected && <CommentArea asin={this.props.HorrorBook.asin} />} */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
