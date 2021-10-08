const readline = require("readline");
const inp = readline.createInterface({
 input: process.stdin
});
const userInput = [];
inp.on("line",(data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start here
var a = userInput[0].split(" ");
var area = (1.732 * +a[0] * +a[1])/4;


console.log(area);

//endhere
});