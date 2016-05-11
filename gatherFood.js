var GatherFood = React.createClass({
  render: function() {
    return (
      <p>
        <button onClick={this.props.action}>
          Feed
        </button>
      </p>
    );
  }
});