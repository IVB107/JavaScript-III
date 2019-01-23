/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding happens is when the "this" keyword is called inside the global scope. The window/DOM is the only context available that "this" can see.
* 2. Implicit binding is where "this" is used inside the context of an object method when that method is invoked. The context of "this" in implicit binding can be determined by looking to the left of the dot where the method is invoked.
* 3. For new binding, "this" points to the constructor object when it is created using the "new" keyword.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.window);

// Principle 2

// code example for Implicit Binding
const pet = {
    name: 'Garfield',
    likesTo: function(action){
        console.log(`${this.name} likes to ${action}`);
    }
}
console.log(pet.likesTo('eat lasagna.'));

// Principle 3

// code example for New Binding
function Car(sound){
    this.make = 'Porsche';
    this.model = '918 Spyder';
    this.horsepower = 887;
    this.sound = sound;
    this.purr = function(){
        return `A ${this.make} ${this.model} goes: "${this.sound}"`;
    }
}
const porsche = new Car('Vroom Vroom!');
console.log(porsche.purr());

// Principle 4

// code example for Explicit Binding