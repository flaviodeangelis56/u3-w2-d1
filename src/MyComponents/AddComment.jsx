import { Component } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

class AddComments extends Component {
  state = {
    commentObj: {
      comment: "",
      rate: "",
      elementId: this.props.asinSelected,
    },
  };
  SetStateComment = async event => {
    event.preventDefault();
    const commentAdded = document.getElementById("addComment").value;
    const rateAdded = document.getElementById("addRate").value;
    await this.setState({ commentObj: { ...this.state.commentObj, comment: commentAdded, rate: rateAdded } });
    this.AddAComWhitFetch();
  };
  AddAComWhitFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.commentObj),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <InputGroup className="mb-1">
        <Form onSubmit={this.SetStateComment}>
          <Form.Group className="mb-1">
            <Form.Control type="text" id="addComment" placeholder="add a comment" />
            <Form.Control type="text" id="addRate" placeholder="Rate Book from 1 to 5" />
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </InputGroup>
    );
  }
}

export default AddComments;
