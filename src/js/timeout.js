console.log("до виклику setTimeOut");

setTimeout(() => {
  console.log("1-всередині callback для setTimeout");
}, 4000);
setTimeout(() => {
  console.log("1-всередині callback для setTimeout");
}, 4000);
console.log("після виклику setTimeOut");

