const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const name = "Your Name";

const textOut = `${textIn.replace("___", name)}`;

fs.writeFileSync("./txt/output.txt", textOut);
