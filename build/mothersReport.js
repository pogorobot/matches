var MothersReport = React.createClass({
  displayName: "MothersReport",

  render: function () {
    if (this.props.mothers) {
      return React.createElement(
        "p",
        null,
        "You have ",
        this.props.mothers,
        " Mothers eating ",
        this.props.input,
        " food per second."
      );
    } else {
      return null;
    }
  }
});