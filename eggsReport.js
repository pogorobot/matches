var EggsReport = React.createClass({
  render: function() {
    if (this.props.eggs) {
      return (
        <p>
          You have laid {this.props.eggs} spider eggs. {this.props.eggRateReport}
        </p>
      );
    }
    else {
      return null;
    }
  }
});