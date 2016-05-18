var Grace = React.createClass({
  displayName: "Grace",

  getInitialState: function () {
    return {
      chapter: 0
    };
  },
  advance: function () {
    this.setState({
      chapter: this.state.chapter + 1
    });
  },
  contents: function () {
    return [React.createElement(Inventory, { action: this.advance }), React.createElement(Webs, { action: this.advance }), React.createElement(Story, { action: this.advance })];
  },
  render: function () {
    return this.contents()[this.state.chapter];
  }
});