module.exports = class StrategyManager {
    constructor() {
      this._strategy = null;
    }

    set strategy(strategy) {
        this._strategy = strategy;
    }

    get strategy() {
        return this._strategy;
    }

    performAction() {
        this._strategy.performAction();
    }
   
  }
  