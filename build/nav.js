var NavBar = React.createClass({
  displayName: "NavBar",

  getInitialState: function () {
    return {
      visible: true,
      active: "Eggs"
    };
  },
  render: function () {
    return React.createElement(
      "ul",
      { className: "nav" },
      React.createElement(NavButton, { name: "Eggs", active: this.isActive("Eggs"), action: this.activate }),
      React.createElement(NavButton, { name: "Webs", active: this.isActive("Webs"), action: this.activate }),
      React.createElement(NavButton, { name: "Friends", active: this.isActive("Friends"), action: this.activate }),
      React.createElement(NavButton, { name: "Family", active: this.isActive("Family"), action: this.activate })
    );
  },
  activate: function (name) {
    this.setState({
      active: name
    });
  },
  isActive: function (name) {
    return this.state.active == name;
  }
});

var NavButton = React.createClass({
  displayName: "NavButton",

  render: function () {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "a",
        { className: this.active(), href: "#", onClick: this.activate },
        this.props.name
      )
    );
  },
  active: function () {
    return this.props.active ? 'active' : 'inactive';
  },
  activate: function () {
    this.props.action(this.props.name);
  }
});