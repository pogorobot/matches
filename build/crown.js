var Crown = React.createClass({
  displayName: "Crown",

  getInitialState() {
    return {
      queen: false
    };
  },
  render: function () {
    if (this.state.queen) {
      return this.queen();
    }
    return React.createElement(
      "div",
      null,
      React.createElement(Sigil, null),
      React.createElement(
        "h3",
        null,
        "Hear the Cry of the Spiders"
      ),
      React.createElement(
        "ul",
        { className: "char-select" },
        React.createElement(PrincessFaith, null)
      ),
      React.createElement(
        "h2",
        null,
        "Why?"
      ),
      React.createElement(
        "p",
        null,
        "Because her father knows things she does not."
      ),
      React.createElement(
        "h3",
        null,
        "What Kind Of Things?"
      ),
      React.createElement(
        "p",
        null,
        "Things like, how to play music."
      ),
      React.createElement(
        "h3",
        null,
        "What Does She Want?"
      ),
      React.createElement(
        "p",
        null,
        "She misses him. She wants to be heard."
      ),
      React.createElement(
        "h2",
        null,
        "SING"
      ),
      React.createElement(
        "iframe",
        { className: "music", src: "https://bandcamp.com/EmbeddedPlayer/album=1985811939/size=large/bgcol=ffffff/linkcol=e99708/tracklist=false/artwork=small/track=46991148/transparent=true/", seamless: true },
        React.createElement(
          "a",
          { href: "http://spiderprincess.bandcamp.com/album/in-league-with-what-now" },
          "In League With What Now? by Spider Princess"
        )
      )
    );
  },

  grace: function () {
    crown('Grace');
  },
  rose: function () {
    crown('Rose');
  },
  faith: function () {
    crown('Faith');
  },
  lucy: function () {
    crown('Lucy');
  },
  harmony: function () {
    crown('Harmony');
  },

  crown: function (princess) {
    this.setState({
      queen: princess
    });
  },

  queen: function () {
    if (this.state.queen == 'Grace') {
      return React.createElement(Grace, null);
    } else if (this.state.queen == 'Rose') {
      return React.createElement(Rose, null);
    } else if (this.state.queen == 'Faith') {
      return React.createElement(Faith, null);
    } else if (this.state.queen == 'Lucy') {
      return React.createElement(Lucy, null);
    } else if (this.state.queen == 'Harmony') {
      return React.createElement(Harmony, null);
    } else {
      return React.createElement(Sigil, null);
    }
  }
});

var Sigil = React.createClass({
  displayName: "Sigil",

  render: function () {
    return React.createElement("img", { className: "troll", src: "assets/aradia.png" });
  }
});

var PrincessGrace = React.createClass({
  displayName: "PrincessGrace",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Grace, Who Longs For Purpose"
    );
  }
});

var PrincessRose = React.createClass({
  displayName: "PrincessRose",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Rose, Who Longs For Clarity"
    );
  }
});

var PrincessFaith = React.createClass({
  displayName: "PrincessFaith",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Faith, Who Longs For Hope, Loves Her Father"
    );
  }
});

var PrincessLucy = React.createClass({
  displayName: "PrincessLucy",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Lucy, Who Longs For Justice"
    );
  }
});

var PrincessHarmony = React.createClass({
  displayName: "PrincessHarmony",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Harmony, Who Longs For Compassion"
    );
  }
});