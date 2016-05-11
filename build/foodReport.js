var FoodReport = React.createClass({
  displayName: "FoodReport",

  render: function () {
    return React.createElement(
      "p",
      null,
      "There is ",
      this.props.food,
      " food in your belly. ",
      this.props.foodRateReport
    );
  }
});