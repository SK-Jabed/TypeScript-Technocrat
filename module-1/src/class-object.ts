{
  //
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
  const cat = new Animal("Pussy", "cat", "Meaw Meaw");

  cat.makeSound();
  //
}