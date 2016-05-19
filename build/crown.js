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
        React.createElement(PrincessGrace, null)
      ),
      React.createElement(
        "h3",
        null,
        "Why?"
      ),
      React.createElement(
        "p",
        null,
        "Because her mother knows exactly what is going to happen, and what she, Grace, can do about it."
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
        "Overwhelming Violence."
      ),
      React.createElement(
        "p",
        null,
        "What can I do about it?"
      ),
      React.createElement(
        "h2",
        null,
        "WATCH"
      ),
      React.createElement("iframe", { width: "512", height: "258", src: "https://www.youtube.com/embed/_jFzDbsGK54", frameborder: "0", allowfullscreen: true }),
      React.createElement(
        "p",
        null,
        "I think I am beginning to see."
      ),
      React.createElement(
        "h3",
        null,
        "You see nothing."
      ),
      React.createElement(
        "p",
        null,
        "That is kind of what I meant."
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
    return React.createElement("img", { className: "sigil", src: "assets/setting.jpg" });
  }
});

var PrincessGrace = React.createClass({
  displayName: "PrincessGrace",

  render: function () {
    return React.createElement(
      "li",
      { onClick: this.props.action },
      "Grace, Who Longs For Purpose, Loves Her Mother"
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