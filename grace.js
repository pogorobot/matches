var Grace = React.createClass({
  getInitialState: function() {
    return {
      chapter: 0
    };
  },
  advance: function() {
    this.setState({
      chapter: this.state.chapter + 1
    });
  },
  contents: function() { 
    return [
      <Inventory action={this.advance} />,
      <Webs action={this.advance} />,
      <Story action={this.advance} />
    ];
  },
  render: function() {
    return this.contents()[this.state.chapter];
  },
});