type RandomNumber = () => number;

const randomNumber: RandomNumber = () => {
  return Math.random();
};

const some = (dynamic_arg: number = randomNumber()): number => {
  return dynamic_arg;
};

console.log(some());
console.log(some());
