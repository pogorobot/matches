var Webs = React.createClass({
  render: function() {
    return (
      <div className="webs">
        {this.board().map(function(tile) {
          return (<Tile image={tile.image} key={tile.key} />);
        })}
      </div>
    );
  },
  board: function() {
    var list = [];
    for (var x = 0; x < 8; x++) {
      for (var y = 0; y < 8; y++) {
        list.push({key: "x" + x + "y" + y});
      }
    }
    return list;
  }
});

var Tile = React.createClass({
  getInitialState: function() {
    return {
      image: "assets/chess.png"
    };
  },
  render: function() {
    if (this.readyToHatch()) {
      this.hatch();
    }
    return (
      <img className="tile" onClick={this.layEgg} src={this.state.image} />
    );
  },
  layEgg: function() {
    this.setState({
      image: "assets/egg.png",
      laidAt: new Date().getTime()
    });
  },
  readyToHatch: function() {
    if (this.state.laidAt) {
      return (new Date().getTime() - this.state.laidAt > this.timeToHatch());
    }
    else {
      return false;
    }
  },
  hatch: function() {
    this.setState({
      image: "assets/hatching.png",
      laidAt: false
    });
  },
  timeToHatch: function() {
    return Math.random() * 10000 + 1000; 
  }
});