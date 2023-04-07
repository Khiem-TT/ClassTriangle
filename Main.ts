import {Shape} from "./Shape";

let shape = new Shape('hinh gi do', 'mau gi do');
console.log(shape);

import {Triangle} from "./Triangle";

let triangle = new Triangle('tam giac la tac giam', 'yellow', 3, 4, 5);
console.log(triangle);
console.log(`Dien tich: ${triangle.getArea()}`);
console.log(`Chu vi: ${triangle.getPerimeter()}`);