// Modules in TypeScript
import hello from "./hello_module.js";
hello();

import { pi, phi, absolute } from "./maths.js";
console.log(pi);
const absPhi = absolute(phi);

import * as math from "./maths.js";
console.log(math.pi);
const positivePhi = math.absolute(phi);

import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
// import type { createCatName } from "./animal.js";
// const name = createCatName();