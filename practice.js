function Dog(name, breed, isAGoodDog) {
    this.name = name;
    this.breed = breed;
    this.legs = 4;
    this.isAGoodDog = isAGoodDog;
};

Dog.prototype.says = function(bark) {
    console.log(bark);
};

Dog.prototype.updateLegs = function(newLegs){
    this.legs = newLegs;
};

const dogOne = new Dog('Parker', 'English Shepherd', true);
const dogTwo = new Dog('Demi', 'Border Collorie', true);

dogOne.says('woof');
dogTwo.updateLegs(3);

console.log(dogTwo.legs);

// var Parker = new Dog("Parker", "English Shephard");
// var Demi = new Dog("Demi", "Border Collie")
