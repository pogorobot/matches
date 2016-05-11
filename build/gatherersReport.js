var GatherersReport = React.createClass({
  displayName: "GatherersReport",

  render: function () {
    if (this.props.gatherers) {
      return React.createElement(
        "p",
        null,
        "You have ",
        this.props.gatherers,
        " Gatherers gathering ",
        this.props.output,
        " Food per second."
      );
    } else {
      return null;
    }
  }
});