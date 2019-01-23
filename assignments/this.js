/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding happens is when the "this" keyword is called inside the global scope. The window/DOM is the only context available that "this" can see.
* 2. Implicit binding is where "this" is used inside the context of an object method when that method is invoked. The context of "this" in implicit binding can be determined by looking to the left of the dot where the method is invoked.
* 3. For new binding, with constructor functions, "this" points to the specific instance of the object that has been created (using the "new" keyword) and returned by the constructor function
* 4. Explicit binding is used to attach properties from one constructor function to another using .call(), .apply(), or .bind() - the "this" keyword is explicitly defined as whatever object is used inside each of those three function methods.
*
*   - From MDN:
*   - The call() method calls a function with a given this value and arguments provided individually.
*   - The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).
*   - The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
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
pet.likesTo('eat lasagna.');

// Principle 3

// code example for New Binding
function Vehicle(specs){
    this.make = specs.make;
    this.model = specs.model;
    this.horsepower = specs.horsepower;
    this.sound = specs.sound;
    this.purr = function(){
        return `A ${this.make} ${this.model} goes: "${this.sound}"`;
    }
}
// Prototypical Inheritance:
// Vehicle.prototype.purr = function(){
//     return `A ${this.make} ${this.model} goes: "${this.sound}"`;
// }

const porsche = new Vehicle({
    make: 'Porsche',
    model: '918 Spyder',
    horsepower: 887,
    sound: 'Vroom Vroom!'
});
console.log(porsche.purr());

// Principle 4

// code example for Explicit Binding

const bigWheel = new Vehicle({
    make: "Louis Marx & Co.",
    model: "Big Wheel",
    horsepower: '2 legs',
    sound: "Look, ma!!"
});

bigWheel.purr.call(porsche);

console.log(bigWheel.purr());

