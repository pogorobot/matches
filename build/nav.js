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
      React.createElement(NavButton, { name: "Foundation", active: this.isActive("Foundation"), action: this.activate }),
      React.createElement(NavButton, { name: "Catacombs", active: this.isActive("Catacombs"), action: this.activate }),
      React.createElement(NavButton, { name: "Sanctuary", active: this.isActive("Sanctuary"), action: this.activate }),
      React.createElement(NavButton, { name: "Roof", active: this.isActive("Roof"), action: this.activate }),
      React.createElement(NavButton, { name: "Steeple", active: this.isActive("Steeple"), action: this.activate })
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