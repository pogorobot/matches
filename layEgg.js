var LayEgg = React.createClass({
  render: function() {
    if (this.props.food >= this.props.cost) {
      return (
        <p>
          <button onClick={this.props.action}>
            Lay an Egg (Food: {this.props.cost})
          </button>
        </p>
      );
    }
    else {
      return null;
    }
  }
});