import ParseBody from "../helpers/parseBody";
import addRoutes from "../helpers/RouteHaneler";
import sendjson from "../helpers/sendJson";

addRoutes("GET", "/", (req, res) => {
  sendjson(res, 200, {
    message: "hello from node js with typeScript",
    path: req.url,
  });
});

addRoutes("GET", "/api", (req, res) => {
  sendjson(res, 200, {
    message: "health ststus ok",
    path: req.url,
  });
});

addRoutes("POST", "/api/user", async (req, res) => {
  const body = await ParseBody(req);
  sendjson(res, 201, body);
});

//==================================
// res.writeHead(200, {
//   "content-type": "application/json",
// });
// res.end(
//   JSON.stringify({
//     message: "hello from node js with typeScript",
//     path: req.url,
//   })
// );
