// Soldier
class Soldier {
  constructor(health, strength) {
    (this.health = health), (this.strength = strength);
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    console.log(damage);
    this.health = this.health - 50;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
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
const viki1 = new Viking('Viking', 250, 1000);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else if (this.health <= 0) {
      return `A Saxon has died in combat`;
    }
  }
}
// console.log(saxon1.receiveDamage(10));
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    var viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var attackResult = saxon.receiveDamage(viking.strength);
    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxon, 1);
    }
    return attackResult;
  }
  saxonAttack() {
    var viking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    var saxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    var attackResult = viking.receiveDamage(saxon.strength);
    if (viking.health <= 0) {
      this.vikingArmy.splice(viking, 1);
    }
    return attackResult;
  }
  showStatus() {
    if (this.vikingArmy.length <= 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else if (this.saxonArmy.length <= 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
