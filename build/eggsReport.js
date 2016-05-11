var EggsReport = React.createClass({
  displayName: "EggsReport",

  render: function () {
    if (this.props.eggs) {
      return React.createElement(
        "p",
        null,
        "You have laid ",
        this.props.eggs,
        " spider eggs. ",
        this.props.eggRateReport
      );
    } else {
      return null;
    }
  }
});