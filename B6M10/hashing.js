const crypto = require("crypto");
console.log("\n MD5 Hash : ");
const md5Hash = crypto.createHash("md5").update("password123").digest("hex"); //not recomended
// console.log(` input : password123 \n md5 has pass: ${md5Hash}`);
const Sha256Hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");

console.log(` input : password123 \n md5 has pass: ${Sha256Hash}`);
const Sha512Hash = crypto
  .createHash("sha512")
  .update("password1@23")
  .digest("hex");

console.log(` input : password123 \n md5 has pass: ${Sha512Hash}`);
