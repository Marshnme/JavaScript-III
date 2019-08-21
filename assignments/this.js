/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

* 1. Window binding - default value of "this" if no other rule is used.


* 2. Implicit Binding - if the function is invoked using a method then "this" is referencing whats left of the dot.


* 3. new binding - creates a new function that links the "this" to the new function


* 4. Explicit binding - call/apply/bind/ to directly choose what "this" refers too. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2

// code example for Implicit Binding

let froggy = {
    name: "toad",
    age: 1,
    noise:"RIBBBBBITTT",
    ribbit: function(){
    console.log(`toad does a ${this.noise} he is only ${this.age}`);
}
}
froggy.ribbit();

// Principle 3

// code example for New Binding
function Grapes(param1,param2){
    this.item1 = param1;
    this.item2 = param2;
}
    myFavGrapes = new Grapes("green","red")

    console.log(`my first favorite type of grape is ${myFavGrapes.item2} my second fav is ${myFavGrapes.item1}`)
// Principle 4

// code example for Explicit Binding
function treeTalk(){
    console.log(`this ${this.type} tree is ${this.width} wide. wow!!`)
}
const tree = {
    height:"100ft",
    width:"600ft",
    type:"oak"
}

treeTalk.call(tree);