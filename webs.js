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
    return (
      <img className="tile" onClick={this.layEgg} src={this.state.image} />
    );
  },
  layEgg: function() {
    this.setState({
      image: "assets/egg.png"
    });
  }
});