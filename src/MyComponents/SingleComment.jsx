import { Component } from "react";
import { Button } from "react-bootstrap";

class SingleComment extends Component {
  removeComment = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.comment._id, {
        method: "DELETE",
        headers: {
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
      <>
        <li>{this.props.comment.comment}</li>
        <li>{this.props.comment.rate}</li>
        <Button onClick={this.removeComment}>Remove</Button>
      </>
    );
  }
}
export default SingleComment;
