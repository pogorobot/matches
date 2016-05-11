var GatherFood = React.createClass({
  displayName: "GatherFood",

  render: function () {
    return React.createElement(
      "p",
      null,
      React.createElement(
        "button",
        { onClick: this.props.action },
        "Feed"
      )
    );
  }
});