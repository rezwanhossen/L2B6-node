import { readUsers, writeUsers } from "../helpers/fileDB";
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
  const users = readUsers();
  const newUser = {
    id: Date.now(),
    ...body,
  };
  users.push(newUser);
  writeUsers(users);
  sendjson(res, 201, body);
});

addRoutes("PUT", "/api/user/:id", async (req, res) => {
  const { id } = (req as any).params;
  const body = await ParseBody(req);
  const users = readUsers();
  const index = users.findIndex((user: any) => user.id == id);
  if (index === -1) {
    sendjson(res, 200, {
      susses: false,
      message: "user not found",
    });
  }
  users[index] = {
    ...users[index],
    ...body,
  };
  writeUsers(users);
  sendjson(res, 202, {
    success: true,
    message: `user updated id: ${id}`,
    data: users[index],
  });
});

addRoutes("DELETE", "/api/user/:id", async (req, res) => {
  const { id } = (req as any).params;
  const users = readUsers();
  const index = users.findIndex((user: any) => user.id == id);
  if (index === -1) {
    return sendjson(res, 404, {
      success: false,
      message: "user not found",
    });
  }
  const deletedUser = users[index];
  users.splice(index, 1);
  writeUsers(users);
  return sendjson(res, 200, {
    success: true,
    message: `user deleted successfully id: ${id}`,
    data: deletedUser,
  });
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
