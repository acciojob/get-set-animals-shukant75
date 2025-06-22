//complete this code
class Animal {
constructor(species){
	this.species=species;
}
	get species(){
		return this._species;
	}
}
makesound():void{
console.log(` the ${this._species}makes a sound`)	
}
class Dog extends Animal {
	constructor(species){
	super(species)	;
	}
bark():void{
	console.log("woof");
}	
}

class Cat extends Animal {
	constructor(species){
	super(species);
	}
	purr():void{
		console.log("purr")
	}
}
const mycat=newcat("siamese");
mycat.makesound();
mycat.purr();
const mydog=newdog("Golden Retriever");
mydog.makesound();
mydog.bark();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
