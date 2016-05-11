var HatchGatherer = React.createClass({
  render: function() {
    if (this.canHatchGatherer()) {
      return (
        <div>
          <p>
            Your eggs are ready to hatch.
          </p>
          <p>
            <button onClick={this.props.action}>
              Hatch a Gatherer (Eggs: {this.props.cost.eggs}, Food: {this.props.cost.food})
            </button>
          </p>
        </div>
      );
    }
    else {
      return null;
    }
  },
  canHatchGatherer: function() {
    if (this.props.eggs >= this.props.cost.eggs) {
      if (this.props.food >= this.props.cost.food) {
        return true;
      }
    }
    return false;
  }
});