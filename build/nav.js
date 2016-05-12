var NavBar = React.createClass({
  displayName: "NavBar",

  render: function () {
    return React.createElement(
      "ul",
      { className: "nav" },
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          { href: "http://whisperedscreams.bandcamp.com/" },
          "Eggs"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          null,
          "Webs"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          null,
          "Friends"
        )
      ),
      React.createElement(
        "li",
        null,
        React.createElement(
          "a",
          null,
          "Family"
        )
      )
    );
  }
});