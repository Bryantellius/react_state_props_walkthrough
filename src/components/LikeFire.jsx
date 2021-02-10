import React, { Component } from "react";

class LikeFire extends Component {
  constructor(props) {
    super(props);
    this.id = props.id + "Img";
    this.state = {
      hasLiked: false,
    };
    this.likedPost = this.likedPost.bind(this);
  }

  likedPost() {
    this.setState({
      hasLiked: true,
    });
    document.getElementById(this.id).style.opacity = 1;
  }

  render() {
    return (
      <span>
        <img
          src="https://cdn140.picsart.com/320584748299211.png?type=webp&to=min&r=640"
          alt="fire"
          height="20px"
          width="20px"
          id={this.id}
          onClick={this.likedPost}
          className="likeFire"
        ></img>
      </span>
    );
  }
}

export default LikeFire;
