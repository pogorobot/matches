var Story = React.createClass({
  displayName: 'Story',

  render: function () {
    return React.createElement(
      'p',
      null,
      React.createElement('img', { src: 'assets/stare.jpg' })
    );
  }
});