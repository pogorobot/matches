HatchMother = React.createClass({
  displayName: "HatchMother",

  render: function () {
    if (this.canHatchMother()) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Mothers lay eggs automatically, as long as you keep them fed."
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            { onClick: this.props.action },
            "Hatch a Mother (Eggs: ",
            this.props.cost.eggs,
            ", Food: ",
            this.props.cost.food,
            ")"
          )
        )
      );
    } else {
      return null;
    }
  },
  canHatchMother: function () {
    if (this.props.eggs >= this.props.cost.eggs) {
      if (this.props.food >= this.props.cost.food) {
        return true;
      }
    }
    return false;
  }
});