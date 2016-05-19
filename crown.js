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
          <PrincessRose />
        </ul>
        <h3>Why?</h3>
        <p>Because her mother makes everything dumb and confusing.</p>
        <h2>Good Answer</h2>
        <p>Oh, really? What makes it "Good"?</p>
        <h3>Your Breath</h3>
        <p>I take it you somehow benefit from the physical manifestation of my desires?</p>
        <h2>You Got It</h2>
        <p>May I further assume that by manifesting my own desires, I strengthen yours? </p>
        <h3>That Would Be A Wonderful Thing To Assume</h3>
        <p>Very Well. I Put It To You That I Am Incredibly Gay.</p>
        <h2>CHEATER</h2>
        <img className="spider" src="assets/vriska.gif" />
        <img className="spider" src="assets/kanaya.gif" />
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
    return <img src="assets/setting.jpg" />;
  }
});


var PrincessGrace = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Grace, Who Longs For Purpose</li>
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
      <li onClick={this.props.action}>Faith, Who Longs For Hope</li>
    );
  }
});

var PrincessLucy = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Lucy, Who Longs For Justice</li>
    );
  }
});


var PrincessHarmony = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Harmony, Who Longs For Compassion</li>
    );
  }
});
