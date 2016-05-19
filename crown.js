var Crown = React.createClass({
  getInitialState() {
      return {
          queen: false  
      };
  },
  render: function() {
    if (this.state.queen) {
      return this.queen();
    }
    return (
      <div>
        <Sigil />
        <h3>Hear the Cry of the Spiders</h3>
        <ul className="char-select">
          <PrincessGrace />
        </ul>
        <h3>Why?</h3>
        <p>Because her mother knows exactly what is going to happen, and what she, Grace, can do about it.</p>
        <h2>Good Answer.</h2>
        <p>What is going to happen?</p>
        <h3>Overwhelming Violence.</h3>
        <p>What can I do about it?</p>
        <h2>WATCH</h2>
        <iframe width="512" height="258" src="https://www.youtube.com/embed/_jFzDbsGK54" frameborder="0" allowfullscreen></iframe>
        <p>I think I am beginning to see.</p>
        <h3>You see nothing.</h3>
        <p>That is kind of what I meant.</p>
        
      </div>
    );
  },

  grace: function() { crown('Grace'); },
  rose: function() { crown('Rose'); },
  faith: function() { crown('Faith'); },
  lucy: function() { crown('Lucy'); },
  harmony: function() { crown('Harmony'); },

  crown: function(princess) {
    this.setState({
      queen: princess
    });
  },

  queen: function() {
    if (this.state.queen == 'Grace') {
      return <Grace />;
    } else if (this.state.queen == 'Rose') {
      return <Rose />;
    } else if (this.state.queen == 'Faith') {
      return <Faith />;
    } else if (this.state.queen == 'Lucy') {
      return <Lucy />;
    } else if (this.state.queen == 'Harmony') {
      return <Harmony />;
    } else {
      return <Sigil />
    }
  }
});

var Sigil = React.createClass({
  render: function() {
    return <img className="sigil" src="assets/setting.jpg" />;
  }
});


var PrincessGrace = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Grace, Who Longs For Purpose, Loves Her Mother</li>
    );
  }
});

var PrincessRose = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Rose, Who Longs For Clarity, Hates Her Mother</li>
    )
  }
});

var PrincessFaith = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Faith, Who Longs For Hope, Loves Her Father</li>
    );
  }
});

var PrincessLucy = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Lucy, Who Longs For Justice, Hates Her Father</li>
    );
  }
});


var PrincessHarmony = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Harmony, Who Longs For Compassion, Loves Absolutely Everyone</li>
    );
  }
});
