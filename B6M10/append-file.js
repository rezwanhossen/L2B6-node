const fs = require("fs");
// fs.writeFileSync("./output/app.log", "application started \n");
// console.log("file created");
const logEntey1 = `${new Date().toISOString()} user logged \n`;
fs.appendFileSync("./output/app.log", logEntey1);
const lofEntery2 = `${new Date().toISOString()} data fatch \n`;
fs.appendFileSync("./output/app.log", lofEntery2);
console.log("task completed");
