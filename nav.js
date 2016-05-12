var NavBar = React.createClass({
  getInitialState: function() {
    return {
      visible: true,
      active: "Eggs"
    };
  },
  render: function() {
    return (
      <ul className="nav">
        <NavButton name="Eggs" active={this.isActive("Eggs")} action={this.activate} />
        <NavButton name="Webs" active={this.isActive("Webs")} action={this.activate} />
        <NavButton name="Friends" active={this.isActive("Friends")} action={this.activate} />
        <NavButton name="Family" active={this.isActive("Family")} action={this.activate} />
      </ul>
    );
  },
  activate: function(name) {
    this.setState({
      active: name
    });
  },
  isActive: function(name) {
    return this.state.active == name;
  }
});

var NavButton = React.createClass({
  render: function() {
    return(
      <li>
        <a className={this.active()} href="#" onClick={this.activate}>
          {this.props.name}
        </a>
      </li>
    );
  },
  active: function() {
    return this.props.active ? 'active' : 'inactive';
  },
  activate: function() {
    this.props.action(this.props.name);
  }
});