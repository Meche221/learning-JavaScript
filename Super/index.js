class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  move(speed){
    console.log(`This ${this.name} moves at a speed of ${speed} kph`);
  }
}

class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim(){
    console.log(`This ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
  
}class Hwak extends Animal {
  constructor(name, age, flyingSpeed){
    super(name, age);
    this.flyingSpeed = flyingSpeed;
  }
  fly(){
    console.log(`This ${this.name} can fly`);
    super.move(this.flyingSpeed);
  } 
}

const rabbit = new Rabbit ("Rabbit", 1, "25 kph");
const fish = new Fish ("fish", 2, "15 kph");
const hwak = new Hwak ("hwak", 4, "105 kph");

console.log(rabbit);
console.log(fish);
console.log(hwak);

rabbit.run();
fish.swim();
hwak.fly();
