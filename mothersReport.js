var MothersReport = React.createClass({
  render: function() {
    if (this.props.mothers) {
      return (
        <p>
          You have {this.props.mothers} Mothers eating {this.props.input} food per second.
        </p>
      );
    }
    else {
      return null;
    }
  }
});