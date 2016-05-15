var Story = React.createClass({
  displayName: "Story",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Portrait, null),
      React.createElement(Dialogue, null),
      React.createElement(Answer, { choice: "Um, hi.", action: this.answer })
    );
  },
  answer: function () {}
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
      "Hi there ^^^^____^^^^;"
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