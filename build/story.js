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
      React.createElement(Setting, null),
      React.createElement(Description, null),
      React.createElement(Portrait, null),
      React.createElement(Dialogue, { line: this.state.nextLine }),
      React.createElement(Answer, { choice: this.state.response, action: this.answer })
    );
  },
  answer: function () {
    this.setState({
      nextLine: "2501____1052",
      response: "........"
    });
  }
});

var Setting = React.createClass({
  displayName: "Setting",

  render: function () {
    return React.createElement(
      "p",
      null,
      React.createElement("img", { src: "assets/setting.jpg" })
    );
  }
});

var Description = React.createClass({
  displayName: "Description",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Okay, friend."
      ),
      React.createElement(
        "p",
        null,
        "I know you're real. I'm not afraid."
      ),
      React.createElement(
        "p",
        null,
        "I want answers. Or, better yet, the truth."
      ),
      React.createElement(
        "p",
        null,
        "I am prepared to offer you my soul."
      ),
      React.createElement(
        "p",
        null,
        "It's a tasty one. I know. I've been practicing."
      )
    );
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