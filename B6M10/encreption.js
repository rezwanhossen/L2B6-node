const crypto = require("crypto");
const alg = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
function enceypt(text) {
  const cipher = crypto.createCipheriv(alg, key, iv);
  let enceypted = cipher.update(text, "utf-8", "hex");
  enceypted += cipher.final("hex");
  return {
    iv: iv.toString("hex"),
    enceyptData: enceypted,
  };
}
function decrypt(enceyptData, ivHex) {
  const decipher = crypto.createDecipheriv(alg, key, Buffer.from(ivHex, "hex"));
  let decrypted = decipher.update(enceyptData, "hex", "utf-8");
  decrypted += decipher.final("utf-8");
  return decrypted;
}
console.log("encreption data");
const en = "my creatdet card : 4221 4222 4333 4343";
console.log("original data : ", en);
const encrepted = enceypt(en);
console.log("encrepted data : ", encrepted);
console.log("Decrypted data :");
const decrypted = decrypt(encrepted.enceyptData, encrepted.iv);
console.log("decrypted Data :", decrypted);
console.log("match", en === decrypted);
