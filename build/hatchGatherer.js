var HatchGatherer = React.createClass({
  displayName: "HatchGatherer",

  render: function () {
    if (this.canHatchGatherer()) {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Your eggs are ready to hatch."
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            { onClick: this.props.action },
            "Hatch a Gatherer (Eggs: ",
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
  canHatchGatherer: function () {
    if (this.props.eggs >= this.props.cost.eggs) {
      if (this.props.food >= this.props.cost.food) {
        return true;
      }
    }
    return false;
  }
});