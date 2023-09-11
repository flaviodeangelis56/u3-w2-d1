import { Component } from "react";
import SingleComment from "./SingleComment";
import AddComments from "./AddComment";

class CommentsList extends Component {
  render() {
    return (
      <>
        <ul>
          {/* {this.props.comArr.map((comObj, i) => {
          return (
            <>
              <SingleComment comment={comObj} />
            </>
          );
        })} */}

          {this.props.comArr
            .filter(comObj => comObj.elementId === this.props.asinSelected)
            .map((comObj, i) => (
              <SingleComment comment={comObj} key={i} />
            ))}
        </ul>
        <AddComments asinSelected={this.props.asinSelected} />
      </>
    );
  }
}
export default CommentsList;
