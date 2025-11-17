class Creature {
  private energy: number = 100;

  constructor(public name: string, public species: string) {}

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
