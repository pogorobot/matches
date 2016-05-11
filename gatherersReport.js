var GatherersReport = React.createClass({
  render: function() {
    if (this.props.gatherers) {
      return (
        <p>
          You have {this.props.gatherers} Gatherers gathering {this.props.output} Food per second.
        </p>
      );
    }
    else {
      return null;
    }
  }
});