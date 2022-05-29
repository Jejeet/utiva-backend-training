const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

const name = "AJ";

const textOut = textIn.replace("___", name);

fs.writeFileSync("./txt/output.txt", textOut);

// NODE.js INTRO ASSIGNMENT
/*
1. Grab the content from ./dev-data/data.json
2. Store it into a variable
3. Log the first item to the console

TIP: You will use JSON.parse().
*/
