const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "cool-file");
const organizedDir = path.join(__dirname, "output", "organized");

const categories = {
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
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });

    testFiles.forEach((file) => {
      fs.writeFileSync(path.join(sourceDir, file), `content of ${file}`);
    });
  }

  console.log("Cool files are created.");
  if (!fs.existsSync(organizedDir)) {
    fs.mkdirSync(organizedDir, { recursive: true });
  }
  const allCategories = [...Object.keys(categories), "others"];

  allCategories.forEach((categoryName) => {
    const categoryPath = path.join(organizedDir, categoryName);

    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath);
    }
  });

  console.log("All directories are ready.");
}
function getCategory(fileName) {
  const extension = path.extname(fileName).toLowerCase();

  for (const [categoryName, extensions] of Object.entries(categories)) {
    if (extensions.includes(extension)) {
      return categoryName;
    }
  }
  return "others";
}
function organizeFiles() {
  console.log("File Organizer");
  console.log("Source:", sourceDir);
  console.log("Destination:", organizedDir);

  console.log("\n" + "_".repeat(60) + "\n");
  if (!fs.existsSync(sourceDir)) {
    console.log("Source directory does not exist!");
    console.log("Please run: node file-organizer init");
    return;
  }

  const files = fs.readdirSync(sourceDir);

  if (files.length === 0) {
    console.log("No files to work on!");
    return;
  }

  console.log(`Found ${files.length} files to organize.\n`);

  const stats = {
    total: 0,
    byCategory: {},
  };

  files.forEach((file) => {
    const sourcePath = path.join(sourceDir, file);
    const stat = fs.statSync(sourcePath);
    if (stat.isDirectory()) {
      return;
    }
    const categoryName = getCategory(file);
    const destinationDir = path.join(organizedDir, categoryName);
    const destinationPath = path.join(destinationDir, file);
    fs.copyFileSync(sourcePath, destinationPath);
    stats.total++;
    stats.byCategory[categoryName] = (stats.byCategory[categoryName] || 0) + 1;
    console.log(`File     : ${file}`);
    console.log(`Category : ${categoryName}`);
    console.log(`Size     : ${stat.size} bytes`);
    console.log("-".repeat(40));
  });

  console.log("\n" + "=".repeat(60));
  console.log("Organization Complete!");
  console.log("=".repeat(60));

  console.log(`Total files: ${stats.total}`);

  console.log("\nFiles by category:");

  Object.entries(stats.byCategory).forEach(([categoryName, count]) => {
    console.log(`${categoryName}: ${count}`);
  });
}

function showHelp() {
  console.log(`
File Organizer

Usage:
  node file-organizer init
  node file-organizer organize

Commands:

  init
    Create source directory and test files.

  organize
    Organize files into categories.

Example:

  node file-organizer init
  node file-organizer organize
`);
}

const command = process.argv[2];
switch (command) {
  case "init":
    initializeDir();
    break;

  case "organize":
    organizeFiles();
    break;

  default:
    showHelp();
    break;
}
