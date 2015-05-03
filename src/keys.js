module.exports = {
  keyUp: function(e) {
    var key = e.which || e.keyCode;
    this.keys[key] = false;
  },

  keyDown: function(e) {
    var key = e.which || e.keyCode;
    this.keys[key] = true;
  },

  is: function(key) {
    return this.keys[key];
  },

  bound: function() {
    if (!this.keyUpBound) {
      this.keyUpBound = this.keyUp.bind(this);
    }

    if (!this.keyDownBound) {
      this.keyDownBound = this.keyDown.bind(this);
    }
  },

  start: function(target) {
    target = target || document;

    this.bound();

    target.addEventListener("keyup", this.keyUpBound);
    target.addEventListener("keydown", this.keyDownBound);
  },

  stop: function(target) {
    target = target || document;

    target.removeEventListener("keyup", this.keyUpBound);
    target.removeEventListener("keydown", this.keyDownBound);
  }
};
