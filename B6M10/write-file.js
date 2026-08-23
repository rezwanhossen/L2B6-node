const fs = require("fs");
const content1 = " this is a content \n and it is syn file";
try {
  fs.writeFileSync("./output/test-sync.txt", content1);
  console.log("file writen sync");
} catch (err) {
  console.error(err.message);
}
const content2 = " this is content too \n it is async";
fs.writeFile("./output/test-Async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else {
    console.log("file written asynchronously");
  }
});
