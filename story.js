var Story = React.createClass({
  getInitialState: function() {
    return {
      nextLine: "Hi there ^^^^____^^^^;",
      response: "Um, hi."
    };
  },
  render: function() {
    return (
      <div>
        <Portrait />
        <Dialogue line={this.state.nextLine} />
        <Answer choice={this.state.response} action={this.answer} />
      </div>
    );
  },
  answer: function() {
    this.setState({
      nextLine: "0000____0000",
      response: "lol"
    });
  },
});

var Portrait = React.createClass({
  render: function() {
    return (
      <p>
        <img src='assets/stare.jpg' />
      </p>
    );
  }
});

var Dialogue = React.createClass({
  render: function() {
    return (
      <p>
        {this.props.line}
      </p>
    );
  }
});

var Answer = React.createClass({
  render: function() {
    return (
      <p> 
        > <a href="#" onClick={this.props.action}>
          {this.props.choice}
        </a>
      </p>
    );
  }
});