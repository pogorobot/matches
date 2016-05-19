var Crown = React.createClass({
  displayName: 'Crown',

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
      'div',
      null,
      React.createElement(Sigil, null),
      React.createElement(
        'h3',
        null,
        'Hear the Cry of the Spiders'
      ),
      React.createElement(
        'ul',
        { className: 'char-select' },
        React.createElement(PrincessGrace, null),
        React.createElement(PrincessRose, null),
        React.createElement(PrincessFaith, null),
        React.createElement(PrincessLucy, null),
        React.createElement(PrincessHarmony, null)
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
  displayName: 'Sigil',

  render: function () {
    return React.createElement('img', { src: 'assets/lilith.png' });
  }
});

var PrincessGrace = React.createClass({
  displayName: 'PrincessGrace',

  render: function () {
    return React.createElement(
      'li',
      { onClick: this.props.action },
      'Grace, Who Longs For Purpose'
    );
  }
});

var PrincessRose = React.createClass({
  displayName: 'PrincessRose',

  render: function () {
    return React.createElement(
      'li',
      { onClick: this.props.action },
      'Rose, Who Longs For Clarity'
    );
  }
});

var PrincessFaith = React.createClass({
  displayName: 'PrincessFaith',

  render: function () {
    return React.createElement(
      'li',
      { onClick: this.props.action },
      'Faith, Who Longs For Hope'
    );
  }
});

var PrincessLucy = React.createClass({
  displayName: 'PrincessLucy',

  render: function () {
    return React.createElement(
      'li',
      { onClick: this.props.action },
      'Lucy, Who Longs For Justice'
    );
  }
});

var PrincessHarmony = React.createClass({
  displayName: 'PrincessHarmony',

  render: function () {
    return React.createElement(
      'li',
      { onClick: this.props.action },
      'Harmony, Who Longs For Compassion'
    );
  }
});