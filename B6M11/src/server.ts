import http, { IncomingMessage, Server, ServerResponse } from "http";
import config from "./config";

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    console.log("server is running.......");
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, {
        "content-type": "application/json",
      });

      res.end(
        JSON.stringify({
          message: "hello from node js with typeScript",
          path: req.url,
        })
      );
    }
    if (req.url == "/api" && req.method == "GET") {
      res.writeHead(200, {
        "content-type": "appliaction/json",
      });
      res.end(
        JSON.stringify({
          message: "health ststus ok",
          path: req.url,
        })
      );
    }
  }
);
server.listen(config.port, () => {
  console.log(`is running on port ${config.port}`);
});
