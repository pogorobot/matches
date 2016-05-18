var Webs = React.createClass({
  displayName: "Webs",

  countChicken: function () {
    this.setState({
      eggs: this.state.eggs + 1
    });
    if (this.state.eggs >= 8) {
      this.props.action();
    }
  },
  getInitialState: function () {
    var action = this.countChicken;
    return {
      board: this.board().map(function (tile) {
        return React.createElement(Tile, { image: tile.image, key: tile.key, action: action });
      }),
      eggs: 0
    };
  },
  render: function () {
    return React.createElement(
      "div",
      { className: "webs" },
      this.state.board
    );
  },
  board: function () {
    var list = [];
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        list.push({ key: "x" + x + "y" + y });
      }
    }
    return list;
  }
});

var Tile = React.createClass({
  displayName: "Tile",

  getInitialState: function () {
    return {
      image: "assets/chess.png"
    };
  },
  render: function () {
    if (this.readyToHatch()) {
      this.hatch();
    }
    return React.createElement("img", { className: "tile", onClick: this.layEgg, src: this.state.image });
  },
  layEgg: function () {
    this.props.action();
    this.setState({
      image: "assets/egg.png",
      laidAt: new Date().getTime()
    });
  },
  readyToHatch: function () {
    if (this.state.laidAt) {
      return new Date().getTime() - this.state.laidAt > this.timeToHatch();
    } else {
      return false;
    }
  },
  hatch: function () {
    this.setState({
      image: "assets/hatching.png",
      laidAt: false
    });
  },
  timeToHatch: function () {
    return Math.random() * 10000 + 1000;
  }
});