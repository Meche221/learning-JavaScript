class Animal{
  alive = true;

  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal{
  name = "rabbit";

  run(){
    console.log(`This ${this.name} is Running!`);
    
  }
}
class Fish extends Animal{
  name = "fish"

  swim(){
    console.log(`This ${this.name} is Swimming`);
    
  }
}
class Hwak extends Animal{
  name = "hwak"

  fly(){
    console.log(`This ${this.name} is Flying`);
    
  }
}

const rabbit = new Rabbit();
const fish = new Fish ();
const hwak = new Hwak();



console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();