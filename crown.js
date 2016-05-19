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
          <PrincessFaith />
        </ul>
        <h2>Why?</h2>
        <p>Because her father knows things she does not.</p>
        <h3>What Kind Of Things?</h3>
        <p>Things like, how to play music.</p>
        <h3>What Does She Want?</h3>
        <p>She misses him. She wants to be heard.</p>
        <h2>SING</h2>
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
    return <img className="troll" src="assets/aradia.png" />;
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
      <li onClick={this.props.action}>Rose, Who Longs For Clarity</li>
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
