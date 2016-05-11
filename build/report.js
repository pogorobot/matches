var Report = React.createClass({
  displayName: "Report",

  render: function () {
    if (this.props.count) {
      return React.createElement(
        "p",
        null,
        React.createElement("img", { src: this.props.image }),
        " x",
        this.props.count
      );
    } else {
      return null;
    }
  }
});