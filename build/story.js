var Story = React.createClass({
  displayName: "Story",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "You are a spider princess."
      ),
      React.createElement(
        "p",
        null,
        "You are hungry."
      )
    );
  }
});