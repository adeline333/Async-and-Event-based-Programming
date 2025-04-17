// promise1.js

let pizzaOrder = new Promise(function(resolve, reject) {
    let isPizzaReady = false;
  
    if (isPizzaReady) {
      resolve("Your pizza is here! 🍕");
    } else {
      reject("No pizza for you 😢");
    }
  });
  
  pizzaOrder
    .then(function(message) {
      console.log("Success:", message);
    })
    .catch(function(error) {
      console.log("Error:", error);
    });
   ////