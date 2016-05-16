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
      nextLine: "8888____8888",
      response: "Your wish is my comedy."
    });
  },
});

var Setting = React.createClass({
  render: function() {
    return (
      <p>
        <img className="setting" src='assets/eye.jpg' />
      </p>
    );
  }
});

var Description = React.createClass({
  render: function() {
    return (
      <div>
        <p>
          Okay, friend. 2
        </p>
        <p>
          I know you're real. I'm not afraid. 5
        </p>
        <p>
          I want answers. Or, better yet, the truth. 0
        </p>
        <p>
          I am prepared to offer you my soul. 1
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