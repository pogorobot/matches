var Inventory = React.createClass({
  getInitialState: function() {
    return {
      food: 0,
      eggs: 0,
      mothers: 0,
      gatherers: 0,
      motherCost: { eggs: 2, food: 8},
      gathererCost: { eggs: 1, food: 4},
      lastHatch: new Date().getTime() };
  },

  //Logic
  elapsed: function() {
    return new Date().getTime() - this.state.lastHatch;
  },

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
    return Math.floor(this.elapsed() * this.perMillisecond(resource));
  },

  perMillisecond: function(resource) {
    return this.producedPerMillisecond(resource) - this.consumedPerMillisecond(resource);
  },

  producedPerMillisecond: function(resource) {
    if (this.parent(resource)) {
      return this.count(this.parent(resource)) * this.production(this.parent(resource));
    }
    else {
      return 0;
    }
  },

  consumedPerMillisecond: function(resource) {
    if (this.predator(resource)) {
      return this.count(this.predator(resource)) * this.consumption(this.predator(resource));
    }
    else {
      return 0;
    }
  },


  //DATA
  parent: function(resource) {
    return {
      eggs: 'mothers',
      food: 'gatherers'
    }[resource];
  },

  predator: function(resource) {
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


  //Eggs
  layEgg: function() {
    this.setState({
      eggs: this.state.eggs + 1,
      food: this.state.food - this.eggCost().food,
    });
  },

  eggs: function() {
    return this.count('eggs');
  },

  eggCost: function() {
    return { food: 2, eggs: 0 }
  },

  //Food

  food: function() {
    return this.count('food');
  },

  gatherFood: function() {
    this.setState({
      food: this.state.food + 1
    });
  },

  foodCost: function() {
    return { food: 0, eggs: 0 }
  },

  //Mothers
  hatch: function() {
    this.setState({
      eggs: this.eggs() - this.state.motherCost.eggs,
      food: this.food() - this.state.motherCost.food,
      mothers: this.state.mothers + 1,
      lastHatch: new Date().getTime()
    });
  },

  possibleMothers: function() {
    if (this.eggs() / this.state.motherCost.eggs < this.food() / this.state.motherCost.food) {
      return Math.floor(this.eggs() / this.state.motherCost.eggs);
    }
    else {
      return Math.floor(this.food() / this.state.motherCost.food);
    }
  },

  hatchAll: function() {
    this.setState({
      eggs: this.eggs() - (this.state.motherCost.eggs * this.possibleMothers()),
      food: this.food() - (this.state.motherCost.food * this.possibleMothers()),
      mothers: this.state.mothers + this.possibleMothers(),
      lastHatch: new Date().getTime()
    });
  },

  //Gatherers
  hatchGatherer: function() {
    this.setState({
      eggs: this.eggs() - this.state.gathererCost.eggs,
      food: this.food() - this.state.gathererCost.food,
      gatherers: this.state.gatherers + 1,
      lastHatch: new Date().getTime()
    });
  },
  hatchAllGatherers: function() {
    this.setState({
      eggs: this.eggs() - (this.state.gathererCost.eggs * this.possibleGatherers()),
      food: this.food() - (this.state.gathererCost.food * this.possibleGatherers()),
      gatherers: this.state.gatherers + this.possibleGatherers(),
      lastHatch: new Date().getTime()
    });
  },
  possibleGatherers: function() {
    if (this.eggs() / this.state.gathererCost.eggs < this.food() / this.state.gathererCost.food) {
      return Math.floor(this.eggs() / this.state.gathererCost.eggs);
    }
    else {
      return Math.floor(this.food() / this.state.gathererCost.food);
    }
  },

  stockpile: function() {
    return {
      food: this.food(),
      eggs: this.eggs(),
      gatherers: this.state.gatherers,
      mothers: this.state.mothers
    };
  },

  propsHash: function() {
    return {
      food: {
        action: this.gatherFood,
        cost: this.foodCost(),
        message: "Catch Food",
        image: 'assets/food.png'
      },
      eggs: {
        action: this.layEgg,
        cost: this.eggCost(),
        message: "Lay Egg",
        image: 'assets/egg.png'
      },
      gatherers: {
        action: this.hatchGatherer,
        cost: this.state.gathererCost,
        message: "Hatch a Gatherer",
        image: 'assets/gatherer.gif'
      },
      mothers: {
        action: this.hatch,
        cost: this.state.motherCost,
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
  afterHatching: function() {
    var after = {
      food: this.props.stockpile.food - this.props.params.cost.food,
      eggs: this.props.stockpile.eggs - this.props.params.cost.eggs,
      gatherers: this.props.stockpile.gatherers - this.props.params.cost.gatherers,
      mothers: this.props.stockpile.mothers - this.props.params.cost.mothers
    };

    after[this.props.name] += 1;
    return after;
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