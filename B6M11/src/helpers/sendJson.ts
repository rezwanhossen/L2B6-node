import { ServerResponse } from "http";

function sendjson(res: ServerResponse, statusCode: number, data: any) {
  res.writeHead(statusCode, {
    "content-type": "application/json",
  });

  res.end(JSON.stringify(data));
}
export default sendjson;
