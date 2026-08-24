import { routes } from "./RouteHaneler";

function dynamicRoute(method: string, url: string) {
  const methodMap = routes.get(method);
  if (!methodMap) return null;
  //"/api/users/:id"
  for (const [routhPath, handeler] of methodMap.entries()) {
    //"["api","users",":id"]"
    const routeParts = routhPath.split("/");
    const urlsParts = url.split("/");
    if (routeParts.length !== urlsParts.length) continue;
    const params: any = {};
    let match = true;
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i]?.startsWith(":")) {
        params[routeParts[i]?.substring(1)!] = urlsParts[i];
      } else if (routeParts[i] !== urlsParts[i]) {
        match = false;
        break;
      }
    }
    if (match) {
      return { handeler, params };
    }
  }
  return null;
}
export default dynamicRoute;
