class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.current = null;
  }

  setRange(min, max) {
    this.min = min - 1;
    this.max = max + 1;
  }

  guess() {
    this.current = Math.floor((this.min + this.max) / 2);
    return this.current;
  }

  lower() {
    this.max = this.current;
  }

  greater() {
    this.min = this.current;
  }
}

module.exports = GuessingGame;
