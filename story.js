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
        <Setting />
        <Description />
        <Portrait />
        <Dialogue line={this.state.nextLine} />
        <Answer choice={this.state.response} action={this.answer} />
      </div>
    );
  },
  answer: function() {
    this.setState({
      nextLine: "2501____1052",
      response: "........"
    });
  },
});

var Setting = React.createClass({
  render: function() {
    return (
      <p>
        <img src='assets/setting.jpg' />
      </p>
    );
  }
});

var Description = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          Okay, friend.
        </p>
        <p>
          I know you're real. I'm not afraid.
        </p>
        <p>
          I want answers. Or, better yet, the truth.
        </p>
        <p>
          I am prepared to offer you my soul.
        </p>
        <p>
          It's a tasty one. I know. I've been practicing.
        </p>
      </div>
    );
  }
})

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