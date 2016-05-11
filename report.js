var Report = React.createClass({
  render: function() {
    if (this.props.count) {
      return (
        <p>
          <img src={this.props.image} /> x{this.props.count}
        </p>
      );
    }
    else {
      return null;
    }
  }
});