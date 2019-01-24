/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function(){
  return `${this.name || "Object"} was removed from the game`;
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats){
  GameObject.call(this, stats);
  this.healthPoints = stats.healthPoints;
  this.name = stats.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function(){
    return `${this.name} took damage`;
}

// console.log(CharacterStats.prototype.destroy());
// console.log(CharacterStats);

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(props){
  CharacterStats.call(this, props);
  this.team = props.team;
  this.weapons = props.weapons;
  this.language = props.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function(){
  return `${this.name} offers a greeting in ${this.language}.`
}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // Hero
function Hero(props){
  Humanoid.call(this, props);
}

Hero.prototype = Object.create(Humanoid.prototype);

const rickSanchezC137 = new Hero({
  createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 3,
    },
    healthPoints: 20,
    name: 'Rick',
    team: 'Rick',
    weapons: [
      'Lazer Gun',
      'Freeze Ray',
      'A broken bottle',
      'Combat Suit'
    ],
    combatSuitOn: false,
    currentWeapon: '',
    language: 'English',
});

Hero.prototype.selectWeapon = function(){
  let rand = Math.floor(Math.random() * this.weapons.length);
  this.currentWeapon = this.weapons[rand];
}

Hero.prototype.attack = function(target){
  this.selectWeapon();
  if (this.currentWeapon === 'Combat Suit'){
    this.healthPoints += 10;
    this.combatSuitOn = true;
    console.log(`${this.name} boosted up with his ${this.currentWeapon}`);
    this.weapons.splice(3, 1);
    this.status(target);
    // Take another turn
    this.attack(target);
  }
  console.log(`${this.name} attacked ${target.name} with his ${this.currentWeapon}`);
  if (this.combatSuitOn){
    target.healthPoints -= 7;
  } else{
    target.healthPoints -= 3;
  }
  if (this.healthPoints <= 5){
    this.healthPoints += 5;
  }
  this.status(target);
}

Hero.prototype.revive = function(){
  this.healthPoints += 5;
  console.log(`${this.name} chugged a health potion.`);
  this.status();
}

Hero.prototype.status = function(target){
  console.log(`${this.name}'s HP: ${this.healthPoints}, ${target.name}'s HP: ${target.healthPoints}`);
}

// Villain

function Villain(props){
  Humanoid.call(this, props);
}

Villain.prototype = Object.create(Humanoid.prototype);

const evilMorty = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  healthPoints: 25,
  name: 'Evil Morty',
  team: 'None',
  weapons: [
    'Pulse Rifle',
    'Switchblade'
  ],
  language: 'English',
});

// console.log(rickSanchezC137);
rickSanchezC137.attack(evilMorty);
rickSanchezC137.attack(evilMorty);
rickSanchezC137.attack(evilMorty);
rickSanchezC137.attack(evilMorty);
rickSanchezC137.attack(evilMorty);