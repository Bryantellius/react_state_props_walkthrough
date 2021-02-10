import React, { Component } from "react";

class PostInput extends Component {
  constructor(props) {
    super(props);

    this.handleClick = props.handleClick;
    this.handleInput = props.handleInput;
  }

  render() {
    return (
      <div className="row" id="inputDiv">
        <div className="col-md-1">
          <p className="shadow rounded bg-success text-light text-center p-1">
            {this.props.user}
          </p>
        </div>
        <div className="col-md-9 form-group">
          <textarea
            className="shadow form-control"
            placeholder="Penny for your thoughts?"
            id="postInput"
            onChange={this.handleInput}
          ></textarea>
        </div>
        <div className="col-md-2 text-center form-group">
          <a href={"#" + this.props.id}>
            <button
              className="shadow btn btn-primary w-100"
              type="submit"
              onClick={this.handleClick}
            >
              Post
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default PostInput;
