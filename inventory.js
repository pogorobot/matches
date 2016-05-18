var Inventory = React.createClass({
  getInitialState: function() {
    return {
      food: 0,
      eggs: 0,
      mothers: 0,
      gatherers: 0,
      lastHatch: new Date().getTime() };
  },

  //Logic

  count: function(resource) {
    var raw = this.state[resource] + this.sinceLastHatch(resource);
    if (raw > 0) {
      return raw;
    }
    else {
      return 0;
    }
  },

  sinceLastHatch: function(resource) {
    return Math.round(this.elapsed() * this.perMillisecond(resource));
  },

  perMillisecond: function(resource) {
    return this.producedPerMillisecond(resource) - this.consumedPerMillisecond(resource);
  },

  producedPerMillisecond: function(resource) {
    if (this.producer(resource)) {
      return this.count(this.producer(resource)) * this.production(this.producer(resource));
    }
    else {
      return 0;
    }
  },

  consumedPerMillisecond: function(resource) {
    if (this.consumer(resource)) {
      return this.count(this.consumer(resource)) * this.consumption(this.consumer(resource));
    }
    else {
      return 0;
    }
  },

  hatch: function(resource) {
    if (this.count('food') > 88) {
      this.props.action();
    }

    paid = this.pay(this.cost(resource));
    paid[resource] += 1;

    this.setState({
      eggs: paid.eggs,
      food: paid.food,
      mothers: paid.mothers,
      gatherers: paid.gatherers,
      lastHatch: new Date().getTime()
    });
  },

  pay: function(cost) {
    stockpile = this.stockpile();
    for (var property in cost) {
      if (cost.hasOwnProperty(property)) {
        stockpile[property] -= cost[property];
      }
    }
    return stockpile;
  },

  elapsed: function() {
    return new Date().getTime() - this.state.lastHatch;
  },

  //DATA
  producer: function(resource) {
    return {
      eggs: 'mothers',
      food: 'gatherers'
    }[resource];
  },

  consumer: function(resource) {
    return {
      food: 'mothers'
    }[resource];
  },

  production: function(resource) {
    return {
      eggs: 0,
      food: 0,
      mothers: 1 / 3000,
      gatherers: 1 / 2000
    }[resource];
  },

  consumption: function(resource) {
    return {
      mothers: 1 / 8000
    }[resource];
  },

  cost: function(resource) {
    return {
      eggs: {food: 2},
      food: {},
      mothers: {eggs: 2, food: 8},
      gatherers: {eggs: 1, food: 4}
    }[resource];
  },

  //Legacy
  layEgg: function() {
    this.hatch('eggs');
  },

  gatherFood: function() {
    this.hatch('food');
  },

  hatchMother: function() {
    this.hatch('mothers');
  },

  hatchGatherer: function() {
    this.hatch('gatherers');
  },

  //Render
  stockpile: function() {
    return {
      food: this.count('food'),
      eggs: this.count('eggs'),
      gatherers: this.count('gatherers'),
      mothers: this.count('mothers')
    };
  },

  propsHash: function() {
    return {
      food: {
        action: this.gatherFood,
        cost: this.cost('food'),
        message: "Catch Food",
        image: 'assets/food.png'
      },
      eggs: {
        action: this.layEgg,
        cost: this.cost('eggs'),
        message: "Lay Egg",
        image: 'assets/egg.png'
      },
      gatherers: {
        action: this.hatchGatherer,
        cost: this.cost('gatherers'),
        message: "Hatch a Gatherer",
        image: 'assets/gatherer.gif'
      },
      mothers: {
        action: this.hatchMother,
        cost: this.cost('mothers'),
        message: "Hatch a Mother",
        image: 'assets/mother.png'
      }
    };
  },

  render: function() {
    return (
      <div>
        <Resource name='food' params={this.propsHash().food} stockpile={this.stockpile()} />
        <Resource name='eggs' params={this.propsHash().eggs} stockpile={this.stockpile()} />
        <Resource name='gatherers' params={this.propsHash().gatherers} stockpile={this.stockpile()} />
        <Resource name='mothers' params={this.propsHash().mothers} stockpile={this.stockpile()} />
      </div>
    );
  }
});


var Resource = React.createClass({
  count: function() {
    return this.props.stockpile[this.props.name];
  },
  render: function() {
    return (
      <div>
        <Hatch action={this.props.params.action} message={this.props.params.message} eggs={this.props.stockpile.eggs} food={this.props.stockpile.food} cost={this.props.params.cost} />
        <Report count={this.count()} image={this.props.params.image} />
      </div>
    );
  }
});