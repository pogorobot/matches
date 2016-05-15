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
        <NavButton name="Foundation" active={this.isActive("Foundation")} action={this.activate} />
        <NavButton name="Catacombs" active={this.isActive("Catacombs")} action={this.activate} />
        <NavButton name="Sanctuary" active={this.isActive("Sanctuary")} action={this.activate} />
        <NavButton name="Roof" active={this.isActive("Roof")} action={this.activate} />
        <NavButton name="Tower" active={this.isActive("Tower")} action={this.activate} />
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