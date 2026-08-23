const fs = require("fs");
fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("temp file created");
if (fs.existsSync("./output/temp.txt")) {
  console.log("file exist !");
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}
try {
  fs.unlinkSync("./output/temp.txt");
} catch (error) {
  console.error(error.message);
}

fs.writeFile(
  "./output/temp2.txt",
  "Another temp file deleted by async func",
  (err) => {
    if (err) return console.error(err.message);
    console.log("another temp file created");
    fs.unlink("./output/temp2.txt", (err) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("temp2 deleted");
      }
    });
  }
);
