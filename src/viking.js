// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let damage = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

    if (this.saxonArmy[0].health <= 0) {
      this.saxonArmy.pop(this.saxonArmy[0]);
    }
    return damage;
  }
  saxonAttack() {
    let randomSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randomViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let damage = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);

    if (this.vikingArmy[0].health <= 0) {
      this.vikingArmy.pop(this.vikingArmy[0]);
    }
    return damage;
  }
  showStatus() {}
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
