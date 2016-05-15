var Webs = React.createClass({
  render: function() {
    return (
      <div className="webs">
        <Tile image="assets/web.png" />
        <Tile image="assets/web.png" />
        <Tile image="assets/web.png" />
        <Tile image="assets/hatching.png" />
        <Tile image="assets/web.png" />
        <Tile image="assets/skull.png" />
        <Tile image="assets/web.png" />
        <Tile image="assets/confused.jpg" />
        <Tile image="assets/chess.png" />
        <Tile image="assets/chess.png" />
        <Tile image="assets/chess.png" />
        <Tile image="assets/chess.png" />
      </div>
    );
  },
});

var Tile = React.createClass({
  render: function() {
    return (
      <img className="tile" src={this.props.image} />
    );
  }
});