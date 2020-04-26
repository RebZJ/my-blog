import React, { Component, createContext } from "react";

//state management thingo
export const MyContext = React.createContext();

function message() {
  var messages = [
    "Good to see ya!",
    "Welcome friend!",
    "Howdy!",
    "Top o' the mornin",
    "Hello!",
    "Hey there, good lookin'",
    "Hey!",
  ];
  var num = Math.floor(Math.random() * messages.length);
  return messages[num];
}

var url_request =
  "https://public-api.wordpress.com/rest/v1.1/sites/rebdoesathink.art.blog/posts/?context='display'";

// Then create a provider Component
export class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      anotherthing: 0,
      greeting: String,
      modal: { value: false, source: "footer" },
    };
  }

  async componentDidMount() {
    this.setState({ greeting: message() });
    fetch(url_request)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({ posts: result.posts });
        },

        (error) => {
          alert(
            error +
              ". SORRY! Can't load this right now, please come back in a minute? (This probably means there are a lot a lot of people here right now). Love -Reb"
          );
        }
      );
  }
  updateValue = (val, src) => {
    this.setState({
      modal: {value:val, source:src},
    });
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateValue: this.updateValue,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
