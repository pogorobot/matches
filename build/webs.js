var Webs = React.createClass({
  displayName: "Webs",

  render: function () {
    return React.createElement(
      "div",
      { className: "webs" },
      React.createElement(Tile, { image: "assets/web.png" }),
      React.createElement(Tile, { image: "assets/web.png" }),
      React.createElement(Tile, { image: "assets/web.png" }),
      React.createElement(Tile, { image: "assets/hatching.png" }),
      React.createElement(Tile, { image: "assets/web.png" }),
      React.createElement(Tile, { image: "assets/skull.png" }),
      React.createElement(Tile, { image: "assets/web.png" }),
      React.createElement(Tile, { image: "assets/confused.jpg" }),
      React.createElement(Tile, { image: "assets/chess.png" }),
      React.createElement(Tile, { image: "assets/chess.png" }),
      React.createElement(Tile, { image: "assets/chess.png" }),
      React.createElement(Tile, { image: "assets/chess.png" })
    );
  }
});

var Tile = React.createClass({
  displayName: "Tile",

  render: function () {
    return React.createElement("img", { className: "tile", src: this.props.image });
  }
});