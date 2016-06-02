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
        React.createElement(PrincessGrace, null),
        React.createElement(PrincessFaith, null),
        React.createElement(PrincessRose, null)
      ),
      React.createElement(
        "h3",
        null,
        "Why?"
      ),
      React.createElement(
        "p",
        null,
        "Because death is nothing more than reversed life."
      ),
      React.createElement(
        "p",
        null,
        "Which your father took advantage of to trick me."
      ),
      React.createElement(
        "h2",
        null,
        "Good Answer."
      ),
      React.createElement(
        "p",
        null,
        "What is going to happen?"
      ),
      React.createElement(
        "h3",
        null,
        "Your Breath"
      ),
      React.createElement(
        "p",
        null,
        "Will there be a parade?"
      ),
      React.createElement(
        "h2",
        null,
        "WASTE"
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
    return React.createElement("img", { className: "sigil", src: "assets/lilith.png" });
  }
});

var PrincessGrace = React.createClass({
  displayName: "PrincessGrace",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Your Purpose Is To Gather Poison"
    );
  }
});

var PrincessRose = React.createClass({
  displayName: "PrincessRose",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Rose, Who Longs For Clarity, Hates Her Mother"
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
      "Lucy, Who Longs For Justice, Hates Her Father"
    );
  }
});

var PrincessHarmony = React.createClass({
  displayName: "PrincessHarmony",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Harmony, Who Longs For Compassion, Loves Absolutely Everyone"
    );
  }
});