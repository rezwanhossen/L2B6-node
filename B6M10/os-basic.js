const os = require("os");
console.log("SYSTEM INFORMATION\n");
console.log("=".repeat(80));
console.log("\n--- Platform Details ---\n");
console.log("Platform       :", os.platform());
console.log("Architecture   :", os.arch());
console.log("OS Type        :", os.type());
console.log("OS Release     :", os.release());
console.log("Host Name      :", os.hostname());

console.log("\n--- CPU Information ---\n");

console.log("CPU Cores      :", os.cpus().length);
console.log("CPU Details    :", os.cpus());

console.log("\n--- Memory Information ---\n");
console.log(
  "Total Memory   :",
  (os.totalmem() / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);
console.log(
  "Free Memory    :",
  (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  "GB"
);

console.log("\n--- User Information ---\n");

console.log("Username       :", os.userInfo().username);
console.log("Home Directory :", os.homedir());
console.log("Temp Directory :", os.tmpdir());

console.log("\n--- System Information ---\n");

console.log("Network        :", os.networkInterfaces());
console.log("System Uptime  :", os.uptime(), "min");
const days = Math.floor(os.uptime() / 85400);
const hr = Math.floor(os.uptime() / 85400 / 3600);
const min = Math.floor(os.uptime() / 3600 / 60);
console.log("System uptime :", days, "days", hr, "hr", min, "min");
console.log("Endianness     :", os.endianness());
console.log("Load Average   :", os.loadavg());
