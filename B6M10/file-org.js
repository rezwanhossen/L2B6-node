const fs = require("fs");
const path = require("path");
const SourcDir = path.join(__dirname, "output", "cool-file");
const orgDir = path.join(__dirname, "output", "orgnized");
const category = {
  images: [".jpg", ".jpeg", ".png", ".svg"],
  documents: [".pdf", ".doc", ".docx", ".txt"],
  videos: [".mp4", ".avi", ".mkv"],
  audio: [".mp3", ".wav", ".flac"],
  code: [".js", ".py", ".c", ".java", ".html"],
};
const testFiles = [
  "jhfuh.png",
  "fdjfj.jpg",
  "dhh.jpg",
  "rhgj.mp4",
  "urhyuif.mp3",
  "sfhiu.js",
];
function initializeDir() {
  if (!fs.existsSync(SourcDir)) {
    fs.mkdirSync(SourcDir, { recursive: true });
    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(SourcDir, file), `content of ${file}`);
    });
  }
  console.log("cool files ar created");
  if (!fs.existsSync(orgDir)) {
    fs.mkdirSync(orgDir, { recursive: true });
  }
  Object.keys(category).forEach((catgry) => {
    const catPath = path.join(orgDir, catgry);
    if (!fs.existsSync(catPath)) {
      fs.mkdirSync(catPath);
    }
  });
}
function getCategory(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  for (const [catgry, extensions] of Object.entries(category)) {
  }
}
