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
    for (var property in this.props.cost) {
      if (this.props.cost.hasOwnProperty(property)) {
        if (this.props[property] < this.props.cost[property]) {
          return false;
        }
      }
    }
    return true;
  },
  cost: function() {
    if (this.props.cost.eggs) {
      if (this.props.cost.food) {
        return " (Eggs: " + this.props.cost.eggs + ", Food: " + this.props.cost.food + ")";
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