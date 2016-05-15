var Story = React.createClass({
  render: function() {
    return (
      <div>
        <Portrait />
        <Dialogue />
        <Answer choice="Um, hi." action={this.answer} />
      </div>
    );
  },
  answer: function() {

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
        Hi there ^^^^____^^^^;
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