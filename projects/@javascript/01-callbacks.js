const sum = (num1, num2, beforeCallback, afterCallback) => {
  if (beforeCallback) {
    beforeCallback(`before calc of ${num1} + ${num2}`);
  }
  const result = num1 + num2;
  if (afterCallback) {
    afterCallback(`the result of ${num1} + ${num2} is ${result}`);
  }
  return result;
};

const sumAsync = (num1, num2, beforeCallback, afterCallback) => {
  const delay =     Math.random() * 100
  console.log( delay);
  setTimeout(
    () => sum(num1, num2, beforeCallback, afterCallback),
    delay
    );
  }

// console.log(sum(1, 2));
// console.log(sum(1, 2, (msg) => console.log(msg), (msg) => console.log(msg)));

// console.log(sum(1, 2, console.log, console.log));

// sumAsync (4, 8, null, console.log);

for (let i = 0; i < 10; i++) {
  sumAsync(i, i, console.log, console.log);
}

console.log("Done.");
