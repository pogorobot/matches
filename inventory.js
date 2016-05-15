var Inventory = React.createClass({
  getInitialState: function() {
    return { 
      eggs: 0, 
      mothers: 0,
      gatherers: 0,
      food: 0,
      motherCost: { eggs: 2, food: 8}, 
      motherSpeed: 1 / 3000,
      gathererCost: { eggs: 1, food: 4},
      gathererSpeed: 1 / 2000,
      lastHatch: new Date().getTime() };
  },
  canLayEgg: function() {
    this.state.food >= this.eggCost().food;
  },
  layEgg: function() {
    this.setState({
      eggs: this.state.eggs + 1,
      food: this.state.food - this.eggCost().food,
    });
  },
  gatherFood: function() {
    this.setState({
      food: this.state.food + 1
    });
  },
  hatch: function() {
    this.setState({
      eggs: this.eggs() - this.state.motherCost.eggs,
      food: this.food() - this.state.motherCost.food,
      mothers: this.state.mothers + 1,
      lastHatch: new Date().getTime()
    });
  },
  hatchGatherer: function() {
    this.setState({
      eggs: this.eggs() - this.state.gathererCost.eggs,
      food: this.food() - this.state.gathererCost.food,
      gatherers: this.state.gatherers + 1,
      lastHatch: new Date().getTime()
    });
  },
  hatchAll: function() {
    this.setState({
      eggs: this.eggs() - (this.state.motherCost.eggs * this.possibleMothers()),
      food: this.food() - (this.state.motherCost.food * this.possibleMothers()),
      mothers: this.state.mothers + this.possibleMothers(),
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
  possibleMothers: function() {
    if (this.eggs() / this.state.motherCost.eggs < this.food() / this.state.motherCost.food) {
      return Math.floor(this.eggs() / this.state.motherCost.eggs);
    }
    else {
      return Math.floor(this.food() / this.state.motherCost.food);
    }
  },
  possibleGatherers: function() {
    if (this.eggs() / this.state.gathererCost.eggs < this.food() / this.state.gathererCost.food) {
      return Math.floor(this.eggs() / this.state.gathererCost.eggs);
    }
    else {
      return Math.floor(this.food() / this.state.gathererCost.food);
    }
  },
  elapsed: function() {
    return new Date().getTime() - this.state.lastHatch;
  },

  food: function() {
    var uncapped = this.state.food + this.foodSinceLastHatch();
    if (uncapped < 0) {
      return 0;
    }
    else {
      return uncapped;
    }
  },
  foodSinceLastHatch: function() {
    return Math.floor(this.elapsed() * this.foodPerMillisecond());
  },
  foodPerMillisecond: function() {
    return this.foodProducedPerMillisecond() - this.foodConsumedPerMillisecond();
  },
  foodProducedPerMillisecond: function() {
    return this.state.gatherers * this.state.gathererSpeed;
  },
  foodConsumedPerMillisecond: function() {
    return this.eggsPerMillisecond();
  },
  foodProducedPerSecond: function() {
    return Math.floor(this.foodProducedPerMillisecond() * 10000) / 10;
  },
  foodConsumedPerSecond: function() {
    return Math.floor(this.foodConsumedPerMillisecond() * 10000) / 10;
  },
  foodPerSecond: function() {
    return Math.floor(this.foodPerMillisecond() * 10000) / 10;
  },
  foodRateReport: function() {
    if (this.foodPerSecond()) {
      return ' (' + this.foodPerSecond() + ' per second)'
    }
    else {
      return '';
    }
  },

  eggs: function() {
    var uncapped = this.state.eggs + this.eggsSinceLastHatch();
    if (uncapped > this.eggsCap()) {
      return this.state.eggs + this.eggsCap();
    }
    else {
      return uncapped;
    }
  },
  eggsSinceLastHatch: function() {
    return this.eggsProduced() - this.eggsConsumed();
  },
  eggsProduced: function() {          
    return Math.floor(this.elapsed() * this.eggsPerMillisecond());
  },
  eggsConsumed: function() {
    return 0;
  },
  eggsCap: function() {
    return this.food();
  },
  eggsPerMillisecond: function() {
    return this.state.mothers * this.state.motherSpeed;
  },
  eggsPerSecond: function() {
    return Math.floor(this.eggsPerMillisecond() * 10000) / 10;
  },
  eggCost: function() {
    return { food: 2, eggs: 0 }
  },
  foodCost: function() {
    return { food: 0, eggs: 0 }
  },
  eggRateReport: function() {
    if (this.eggsPerSecond()) {
      return  ' (' + this.eggsPerSecond() + ' per second)'
    }
    else {
      return '';
    }
  },

  render: function() {
    return (
      <div>
        <NavBar />
        <Story />
        <Hatch action={this.gatherFood} message="Catch Food" food={this.food()} eggs={this.eggs()} cost={this.foodCost()} />
        <Report count={this.food()} image='assets/food.jpg' />

        <Hatch action={this.layEgg} message="Lay Egg" food={this.food()} eggs={this.eggs()} cost={this.eggCost()} />
        <Report count={this.eggs()} image='assets/egg.png' />

        <Hatch action={this.hatchGatherer} message="Hatch a Gatherer" eggs={this.eggs()} food={this.food()} cost={this.state.gathererCost} />
        <Report count={this.state.gatherers} image='assets/gatherer.gif' />

        <Hatch action={this.hatch} message="Hatch a Mother" eggs={this.eggs()} food={this.food()} cost={this.state.motherCost} />
        <Report count={this.state.mothers} image='assets/mother.png' />
      </div>
    );
  }
});
