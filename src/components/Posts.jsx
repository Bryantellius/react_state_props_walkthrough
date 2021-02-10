import React, { Component } from "react";
import LikeFire from "./LikeFire";

class Posts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.posts.map((post) => (
          <div className="row my-3" key={post.id} id={post.id}>
            <div className="col-md-1">
              <p className="shadow rounded bg-success text-light text-center p-1">
                {post.user}
              </p>
            </div>
            <div className="col-md-9">
              <p className="shadow rounded bg-light p-3 m-0">{post.text}</p>
              <LikeFire id={post.id} />
            </div>
            <div className="col-md-2">
              <p className="rounded text-light text-right p-1">{post.time}</p>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default Posts;
