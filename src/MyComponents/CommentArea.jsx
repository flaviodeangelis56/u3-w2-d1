import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComments from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    isLoading: true,
    commentsArr: [],
    elementId: this.props.asinSelected,
    error: false,
  };
  commentFetch = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTYwMWMwMzRmZjAwMTQwM2Y0ZTEiLCJpYXQiOjE2OTQwODczNzcsImV4cCI6MTY5NTI5Njk3N30.WMnxbDPf73sbHhHCp1dOoBMilWMGacQLwO3MfwIN82o",
        },
      });
      if (resp.ok) {
        const commentsArr = await resp.json();
        console.log(commentsArr);
        this.setState({ commentsArr });
      } else {
        this.setState({ error: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  componentDidMount = async () => {
    this.commentFetch();
  };
  render() {
    return (
      <>
        {this.state.error && <Alert variant="danger">Si è verificato un errore durante fetch</Alert>}
        {this.state.isLoading && <Spinner animation="grow" variant="danger" />}
        {this.props.asinSelected ? (
          <CommentsList
            comArr={this.state.commentsArr}
            elementId={this.state.elementId}
            asinSelected={this.props.asinSelected}
          />
        ) : (
          "seleziona un libro"
        )}
      </>
    );
  }
}
export default CommentArea;
