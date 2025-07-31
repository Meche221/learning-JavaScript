class Mathutil{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius * 2;
  }
  static getCircumference(radius){
    return 2 * this.PI * radius
  }
  static getArea(radius){
    return this.PI * radius**2
  }
}

console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(10));
console.log(Mathutil.getCircumference(10));
console.log(Mathutil.getArea(10));

