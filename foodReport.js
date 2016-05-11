var FoodReport = React.createClass({
  render: function() {
    return (
      <p>
        There is {this.props.food} food in your belly. {this.props.foodRateReport}
      </p>
    )
  }
});