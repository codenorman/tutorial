const Promise = require("bluebird");

const getFields = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(["North 40", "South 40"]), 2000);
  });
};

const getCrops = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(["corn", "soybean"]), 2000);
    // setTimeout(() => reject('Error crops not found.'), 2000)
  });
};

const getIrrigation = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(["none", "center pivot", "drip"]), 2000);
  });
};

// var x = Promise.resolve(42)
//     .then(value => {
//         return {v: value, x: value * 2}
//     })
//     .then(response => [response])
//     .then(console.log);

// // Example
// getFields()
//     .then(fields => {
//         return getCrops()
//     })
//     .then(crops => {
//         return getIrrigation()
//     })
//     .then(console.log);

// /// is SAME AS

// getFields()
//     .then(fields => getCrops())
//     .then( crops => getIrrigation())
//     .then(console.log)
//     .catch(console.log)

// Example
Promise.all([getFields(), getCrops(), getIrrigation()])
  .then(([fields, crops, irrigation]) => {
    // .then((results) => {
    //     const fields = results[0];
    //     const crops = results[1];
    //     const irrigation = results[2];
    console.log("fields:", fields);
    console.log("crops:", crops);
    console.log("irrigation:", irrigation);
  })
  .catch(err => {
    console.log("Error:", err);
  });
