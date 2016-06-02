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
        <img className="anchor" src="assets/setting.jpg" />
        <ul className="char-select">
          <PrincessGrace />
          <PrincessFaith />
          <PrincessRose />
          <PrincessLucy />
          <PrincessHarmony />
        </ul>
        <h3>Why?</h3>
        <p>Because death is nothing more than reversed life.</p>
        <p>Which your father took advantage of to imprison me.</p>
        <img className="vampire" src="assets/trick.jpg" />
        <h2>Good Answer.</h2>
        <p>What is going to happen?</p>
        <img className="witch" src="assets/willow.png" />
        <h3>Your Blood Is Hot.</h3>
        <p>Oh nooo. Will I attract vampires?</p>
        <img className="vampire" src="assets/jubal.jpg" />
        <h2>Do You Love Yourself, Then?</h2>
        <p>More than anything. ::::)</p>
        <img className="anchor" src="assets/jade.gif" />
        <h3>Well, that was easy enough.</h3>
        <p>Onward and upward!</p>
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
      return <Lucy action={this.lucy} />;
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
      <li onClick={this.props.action}>From Rose: A Poison Of Blindness</li>
    )
  }
});

var PrincessFaith = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>From Faith: A Poison Of Helplessness</li>
    );
  }
});

var PrincessLucy = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>From Lucy: A Poison Of Imprisonment</li>
    );
  }
});


var PrincessHarmony = React.createClass({
  render: function() {
    return (
      <li onClick={this.props.action}>From Harmony: A Universal Antidote</li>
    );
  }
});
