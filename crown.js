var Crown = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Choose Your Princess</h3>
        <ul className="char-select">
          <PrincessFaith />
          <PrincessGrace />
          <PrincessHarmony />
          <PrincessLucy />
          <PrincessRose />
        </ul>
      </div>
    );
  }
});

var PrincessFaith = React.createClass({
  render: function() {
    return (
      <li>Faith, Who Remembers The Future</li>
    );
  }
});

var PrincessGrace = React.createClass({
  render: function() {
    return (
      <li>Grace, Who Stumbles But Will Never Fall</li>
    );
  }
});

var PrincessHarmony = React.createClass({
  render: function() {
    return (
      <li>Harmony, For Whom Even Monsters Are Super Gay</li>
    );
  }
});

var PrincessLucy = React.createClass({
  render: function() {
    return (
      <li>Lucy, Short For Lucifer ;;;;)</li>
    );
  }
});

var PrincessRose = React.createClass({
  render: function() {
    return (
      <li>Rose, Who Can Explain Anything</li>
    )
  }
});