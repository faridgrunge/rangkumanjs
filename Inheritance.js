class Animal {
    constructor(name, legs, species, sound){
      this.name = name;
      this.legs = legs;
      this.species = species;
      this.sound = sound;
    }
  
    showInfo(){
      console.log(`${this.name} is a ${this.species} that has ${this.legs} legs`);
    }
  
    showSound(){
      console.log(`${this.species} goes ${this.sound}`)
    }
  
    changeName(name){
      return this.name = name
    }
  
    static isAnimal(animal){
      if(animal === "cat"){
        console.log(`${animal} is an animal`)
      }else{
        console.log(`${animal} is NOT an animal`)
      }
    }
  
  }
  
  class Cat extends Animal {
    constructor(name, legs, species, sound, breed){
      super(name, legs, species, sound);
      this.breed = breed;
    }
  
    showBreed(){
      console.log(`It's ${this.breed} breed`)
    }
  }
  
  class Dog extends Animal {
    constructor(name, legs, species, sound, breed){
      super(name, legs, species, sound);
      this.breed = breed;
    }
  
    showBreed(){
      console.log(`It's ${this.breed} breed`)
    }
  }
  
  let Cathy = new Cat("Cathy", 4, "Cat", "Meow", "Persian")
  
//   Cathy.showInfo()
//   Cathy.showBreed()
Cathy.showSound()
  
  
  let Dogthor = new Dog("Dogthor", 4, "Dog", "Woof", "Bulldog")
  
  
  Dogthor.name = "Doggy"
  
  
//   Dogthor.showInfo()
  Dogthor.changeName("Mona")
  
  // Dogthor.showBreed()
  // Dogthor.showSound()
  
  // Cathy.showInfo()
  // Cathy.showSound()
  
  // Dogthor.showInfo()
  // Dogthor.showSound()
  
  
  
  // Dog.isAnimal("cat");