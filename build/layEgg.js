var LayEgg = React.createClass({
  displayName: "LayEgg",

  render: function () {
    if (this.props.food >= this.props.cost) {
      return React.createElement(
        "p",
        null,
        React.createElement(
          "button",
          { onClick: this.props.action },
          "Lay an Egg (Food: ",
          this.props.cost,
          ")"
        )
      );
    } else {
      return null;
    }
  }
});