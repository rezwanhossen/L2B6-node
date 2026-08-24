import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";
import { RouteHandler, routes } from "./helpers/RouteHaneler";
import "./routes";
const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const method = req.method?.toLowerCase() || "";
    const path = req.url || "";
    const methodMap = routes.get(method);
    const handeler: RouteHandler | undefined = methodMap?.get(path);
    if (handeler) {
      handeler(req, res);
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          success: false,
          message: "route not found",
          path,
        })
      );
    }
  }
);
server.listen(config.port, () => {
  console.log(`is running on port ${config.port}`);
});

//==========================================
//root route
// if (req.url == "/" && req.method == "GET") {
//   res.writeHead(200, {
//     "content-type": "application/json",
//   });

//   res.end(
//     JSON.stringify({
//       message: "hello from node js with typeScript",
//       path: req.url,
//     })
//   );
// }
///helper route
// if (req.url == "/api" && req.method == "GET") {
//   res.writeHead(200, {
//     "content-type": "appliaction/json",
//   });
//   res.end(
//     JSON.stringify({
//       message: "health ststus ok",
//       path: req.url,
//     })
//   );
// }
//post
// if (req.url == "/api/user" && req.method == "POST") {
// let body = "";
// req.on("data", (chunk) => {
//   body += chunk.toString();
// });
// req.on("end", () => {
//   try {
//     const parsbody = JSON.parse(body);
//     console.log("cathing ");
//     res.end(JSON.stringify(parsbody));
//   } catch (error: any) {
//     console.log(error.message);
//   }
// });
// }
