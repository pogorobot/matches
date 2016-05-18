var Crown = React.createClass({
  displayName: "Crown",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "Choose Your Princess"
      ),
      React.createElement(
        "ul",
        { className: "char-select" },
        React.createElement(PrincessFaith, null),
        React.createElement(PrincessGrace, null),
        React.createElement(PrincessHarmony, null),
        React.createElement(PrincessLucy, null),
        React.createElement(PrincessRose, null)
      )
    );
  }
});

var PrincessFaith = React.createClass({
  displayName: "PrincessFaith",

  render: function () {
    return React.createElement(
      "li",
      null,
      "Faith, Who Remembers The Future"
    );
  }
});

var PrincessGrace = React.createClass({
  displayName: "PrincessGrace",

  render: function () {
    return React.createElement(
      "li",
      null,
      "Grace, Who Stumbles But Will Never Fall"
    );
  }
});

var PrincessHarmony = React.createClass({
  displayName: "PrincessHarmony",

  render: function () {
    return React.createElement(
      "li",
      null,
      "Harmony, For Whom Even Monsters Are Super Gay"
    );
  }
});

var PrincessLucy = React.createClass({
  displayName: "PrincessLucy",

  render: function () {
    return React.createElement(
      "li",
      null,
      "Lucy, Short For Lucifer ;;;;)"
    );
  }
});

var PrincessRose = React.createClass({
  displayName: "PrincessRose",

  render: function () {
    return React.createElement(
      "li",
      null,
      "Rose, Who Can Explain Anything"
    );
  }
});