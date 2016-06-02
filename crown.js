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
          <PrincessFaith />
        </ul>
        <h3>Why?</h3>
        <p>Because death is nothing more than reversed life.</p>
        <p>Which your father knew better than most.</p>
        <h2>Good Answer.</h2>
        <p>What is going to happen?</p>
        <h3>Underwhelming Victory.</h3>
        <p>Will there be a parade?</p>
        <h2>MATCH</h2>
        <iframe className="music" src="https://bandcamp.com/EmbeddedPlayer/album=1985811939/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/track=46991148/transparent=true/" seamless><a href="http://spiderprincess.bandcamp.com/album/in-league-with-what-now">In League With What Now? by Spider Princess</a></iframe>
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
    return <img className="sigil" src="assets/lilith.png" />;
  }
});


var PrincessGrace = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>Your Purpose Is To Gather Poison</li>
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
