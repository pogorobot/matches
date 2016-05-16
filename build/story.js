var Story = React.createClass({
  displayName: "Story",

  getInitialState: function () {
    return {
      nextLine: "Hi there ^^^^____^^^^;",
      response: "Um, hi."
    };
  },
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Setting, null),
      React.createElement(Description, null),
      React.createElement(Portrait, null),
      React.createElement(Dialogue, { line: this.state.nextLine }),
      React.createElement(Answer, { choice: this.state.response, action: this.answer })
    );
  },
  answer: function () {
    this.setState({
      nextLine: "8888____8888",
      response: "Your witch is my familiar."
    });
  }
});

var Setting = React.createClass({
  displayName: "Setting",

  render: function () {
    return React.createElement(
      "p",
      null,
      React.createElement("img", { className: "setting", src: "assets/eye.jpg" })
    );
  }
});

var Description = React.createClass({
  displayName: "Description",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Susan and the two cats were bitterly tired with rowing before they rounded the last headland and began the final pull up Glasswater itself, and Lucy's head ached from the long hours of sun and the glare on the water. Even Trumpkin longed for the voyage to be over. The seat on which he sat to steer had been made for men, not spiders, and her feet did not reach the floor-boards; and everyone knows how uncomfortable that is even for ten minutes. And as they all grew more tired, their spirits fell. Up till now the friends had only been thinking of how to get to Caspian. Now they wondered what they would do when they found her, and how a handful of spiders and cats could defeat an army of grown-up humans."
      ),
      React.createElement(
        "p",
        null,
        "Twilight was coming on as they rowed slowly up the windings of Glasswater Creek -- a twilight which deepened as the banks drew closer together and the overhanging trees began almost to meet overhead. It was very quiet in here as the sound of the sea died away behind them; they could even hear the trickle of the little streams that poured down from the forest into Glasswater."
      ),
      React.createElement(
        "p",
        null,
        "They went ashore at last, far too tired to attempt lighting a fire; and even a supper of apples (though most of them felt that they never wanted to see an apple again) seemed better than trying to catch or shoot anything. After a little silent munching they all huddled down together in the moss and dead leaves between four large beech trees."
      ),
      React.createElement(
        "p",
        null,
        "Everyone except Lucy went to sleep at once. Lucy, being far less tired, found it hard to get comfortable. Also, she had forgotten till now that all cats dream. She knew that one of the best ways of getting to sleep is to stop trying, so she opened her eyes. Through a gap in the bracken and branches she could just see a patch of water in the Creek and the sky above it. Then, with a thrill of memory, she saw again, after all those years, the bright Narnian stars. She had once known them better than the stars of our own world, because as a queen in Narnia she had gone to bed much later than as a child in England. And there they were -- at least, three of the summer constellations could be seen from where she lay; the Ship, the Hammer, and the Leopard. \"Dear old Leopard,\" she murmured happily to herself."
      ),
      React.createElement(
        "p",
        null,
        "Instead of getting drowsier she was getting more awake -- with an odd, night-time, dreamish kind of wakefulness. The Creek was growing brighter. She knew now that the moon was on it, though she couldn't see the moon. And now she began to feel that the whole forest was coming awake like herself. Hardly knowing why she did it, she got up quickly and walked a little distance away from their bivouac."
      ),
      React.createElement(
        "p",
        null,
        "\"This is lovely,\" said Lucy to herself. It was cool and fresh; delicious smells were floating everywhere. Somewhere close by she heard the twitter of a nightingale beginning to sing, then stopping, then beginning again. It was a little lighter ahead. She went towards the light and came to a place where there were fewer trees, and whole patches or pools of moonlight, but the moonlight and the shadows so mixed that you could hardly be sure where anything was or what it was. At the same moment the nightingale, satisfied at last with her tuning up, burst into full song."
      ),
      React.createElement(
        "p",
        null,
        "Lucy's eyes began to grow accustomed to the light, and she saw the trees that were nearest her more distinctly. A great longing for the old days when the trees could talk in Narnia came over her. She knew exactly how each of these trees would talk if only she could wake them, and what sort of human form it would put on. She looked at a silver birch: it would have a soft, showery voice and would look like a slender girl, with hair blown all about her face, and fond of dancing. She looked at the oak: he would be a wizened, but hearty old man with a frizzled beard and warts on his face and hands, and hair growing out of the warts. She looked at the beech under which she was standing. Ah -- she would be the best of all. She would be a gracious goddess, smooth and stately, the lady of the wood."
      ),
      React.createElement(
        "p",
        null,
        "\"Oh, Trees, Trees, Trees,\" said Lucy (though she had not been intending to speak at all). \"Oh, Trees, wake, wake, wake. Don't you remember it? Don't you remember ME? Dryads and Hamadryads, come out, come to me.\""
      ),
      React.createElement(
        "p",
        null,
        "Though there was not a breath of wind they all stirred about her. The rustling noise of the leaves was almost like words. The nightingale stopped singing."
      ),
      React.createElement(
        "p",
        null,
        "\"We remember,\" said the Trees. \"Don't you, little one?"
      )
    );
  }
});

var Portrait = React.createClass({
  displayName: "Portrait",

  render: function () {
    return React.createElement(
      "p",
      null,
      React.createElement("img", { src: "assets/stare.jpg" })
    );
  }
});

var Dialogue = React.createClass({
  displayName: "Dialogue",

  render: function () {
    return React.createElement(
      "p",
      null,
      this.props.line
    );
  }
});

var Answer = React.createClass({
  displayName: "Answer",

  render: function () {
    return React.createElement(
      "p",
      null,
      "> ",
      React.createElement(
        "a",
        { href: "#", onClick: this.props.action },
        this.props.choice
      )
    );
  }
});