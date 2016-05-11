HatchMother = React.createClass({
  render: function() {
    if (this.canHatchMother()) {
      return (
        <div>
          <p>
            Mothers lay eggs automatically, as long as you keep them fed.
          </p>
          <p>
            <button onClick={this.props.action}>
              Hatch a Mother (Eggs: {this.props.cost.eggs}, Food: {this.props.cost.food})
            </button>
          </p>
        </div>
      )
    }
    else {
      return null;
    }
  },
  canHatchMother: function() {
    if (this.props.eggs >= this.props.cost.eggs) {
      if (this.props.food >= this.props.cost.food) {
        return true;
      }
    }
    return false;
  }
});