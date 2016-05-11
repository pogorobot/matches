var Hatch = React.createClass({
  render: function() {
    if (this.canHatch()) {
      return (
        <p>
          <button onClick={this.props.action}>
            {this.props.message} {this.cost()}
          </button>
        </p>
      )
    }
    else {
      return null;
    }
  },
  canHatch: function() {
    if (this.props.eggs >= this.props.cost.eggs) {
      if (this.props.food >= this.props.cost.food) {
        return true;
      }
    }
    return false;
  },
  cost: function() {
    if (this.props.cost.eggs) {
      if (this.props.cost.food) {
        return " (Eggs: " + this.props.cost.eggs + " , Food: " + this.props.cost.food + ")";
      }
      else {
        return " (Eggs: " + this.props.cost.eggs + ")";
      }
    }
    else {
      if (this.props.cost.food) {
        return " (Food: " + this.props.cost.food + ")";
      }
      else {
        return ""
      }
    }
  }
});