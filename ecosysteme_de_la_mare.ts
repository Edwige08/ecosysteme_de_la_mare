// EXERCICE 1: Créatures de la mare

class Creature {
  protected energy: number = 100;

  constructor(public name: string, public species: string) { }

  move(): void {
    this.energy -= 10;
  }

  rest(): void {
    this.energy += 20;
    if (this.energy > 100) {
      this.energy = 100;
    }
  }
  getEnergy(): number {
    return this.energy;
  }
}

// Testez votre code:
const grenouille = new Creature("René", "grenouille");
grenouille.move();
console.log(grenouille.getEnergy()); // Devrait afficher 90

// EXERCICE 2: Héritage - Types de créatures

abstract class Animal extends Creature {
  abstract makeSound(): string;

}

class Frog extends Animal {
  makeSound(): string {
    return "Croa";
  }
}

class Fish extends Animal {
  makeSound(): string {
    return "Bloop";
  }
}

class Dragonfly extends Animal {
  makeSound(): string {
    return "Vvvv";
  }
}

class Mosquito extends Animal {
  makeSound(): string {
    return "Bzzz";
  }
  sting(): void {
    console.log("Je t'ai piqué !");
  }
}

class Snail extends Animal {
  makeSound(): string {
    return "Blblbl"
  }
  move(): void {
    this.energy -= 5;
  }
}

const animals: Animal[] = [
  new Frog("René", "grenouille"),
  new Fish("Nemo", "poisson"),
  new Dragonfly("Dart", "libellule"),
  new Mosquito("Buzz", "moustique"),
  new Snail("Gary", "escargot")
];

for (const animal of animals) {
  console.log(animal.makeSound());
}

// EXERCICE 3: Interfaces - Comportements

interface Swimmer {
  swim(): void;
}

interface Flyer {
  fly(): void;
}

interface Predator {
  hunt(prey: Animal): void;
}

class Duck extends Animal implements Swimmer, Flyer {
  makeSound(): string {
    return "Coin Coin";
  }
  swim(): string {
    return `${this.name} nage`;
  };
  fly(): string {
    return `${this.name} vole`;
  };
}

class Pike extends Fish implements Swimmer, Predator {
  swim(): string {
    return `${this.name} nage`;
  };
  hunt(prey: Animal): string {
    return `${this.name} chasse ${prey.name}`;
  }
}

const makeSwim = (creature: Swimmer) => {
  return creature.swim();
};

// Test
const canard = new Duck("Donald", "canard");
const brochet = new Pike("Bruce", "brochet");
console.log(makeSwim(canard));
console.log(makeSwim(brochet));
console.log(brochet.hunt(canard));