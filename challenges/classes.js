// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass {
  constructor(cuboidAttr) {
    this.length = cuboidAttr.length;
    this.width = cuboidAttr.width;
    this.height = cuboidAttr.height;
  }

  volume() {
    return this.length * this.height * this.height;
  }

  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const newCuboid = new CuboidMakerClass({
  length: 4,
  width: 5,
  height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMakerClass {
  constructor(cubeAttr) {
    super(cubeAttr);
  }

  volume() {
    return Math.pow(this.length, 3);
  }

  surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
}

const square = new CubeMaker({
  length: 5,
  width: this.length,
  height: this.width
});
console.log(square.volume());
console.log(square.surfaceArea());