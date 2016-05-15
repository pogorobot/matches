var Story = React.createClass({
  displayName: "Story",

  getInitialState: function () {
    return {
      nextLine: "Hi there ^^^^____^^^^;",
      response: "Um, hi."
    };
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Portrait, null),
      React.createElement(Dialogue, { line: this.state.nextLine }),
      React.createElement(Answer, { choice: this.state.response, action: this.answer })
    );
  },
  answer: function () {
    this.setState({
      nextLine: "0000____0000",
      response: "lol"
    });
  }
});

var Portrait = React.createClass({
  displayName: "Portrait",

  render: function () {
    return React.createElement(
      "p",
      null,
      React.createElement("img", { src: "assets/stare.jpg" })
    );
  }
});

var Dialogue = React.createClass({
  displayName: "Dialogue",

  render: function () {
    return React.createElement(
      "p",
      null,
      this.props.line
    );
  }
});

var Answer = React.createClass({
  displayName: "Answer",

  render: function () {
    return React.createElement(
      "p",
      null,
      "> ",
      React.createElement(
        "a",
        { href: "#", onClick: this.props.action },
        this.props.choice
      )
    );
  }
});