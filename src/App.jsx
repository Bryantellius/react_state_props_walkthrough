import React, { Component } from "react";
import Posts from "./components/Posts";
import Nav from "./components/Nav";
import PostInput from "./components/PostInput";

let number = 4;
const postsArr = [
  {
    user: "W",
    text: "Blah.. It has already rained TOO much this year :/",
    time: "Earlier",
    id: "initial1",
  },
  {
    user: "P",
    text:
      "Sometimes I carry cash in my wallet just to make it seem full, even though I only pay with card. #confessions",
    time: "Earlier",
    id: "initial2",
  },
  {
    user: "S",
    text: "Pizza is the best. The. Best.",
    time: "Earlier",
    id: "initial3",
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "BB",
      text: "",
      time: "",
      id: "initial3",
      updatedPostsArr: postsArr,
    };
  }

  handleClick = () => {
    if (document.getElementById("postInput").value === "") {
    } else {
      postsArr.push({
        user: this.state.user,
        text: this.state.text,
        time: this.state.time,
        id: this.state.id,
      });
      this.setState({
        updatedPostsArr: postsArr,
      });
      document.getElementById("postInput").value = "";
      setTimeout(
        () => document.getElementById(this.state.id).scrollIntoView(),
        100
      );
    }
    number++;
  };

  handleInput = (event) => {
    this.setState({
      text: event.target.value,
      time: new Date().toLocaleTimeString(),
      id: "post" + number,
    });
  };

  render() {
    return (
      <div>
        <Nav />

        <hr></hr>

        <div id="postsDiv">
          <Posts posts={this.state.updatedPostsArr} />
        </div>

        <hr></hr>

        <PostInput
          user={this.state.user}
          handleClick={this.handleClick}
          handleInput={this.handleInput}
          id={this.state.id}
        />
      </div>
    );
  }
}

export default App;
