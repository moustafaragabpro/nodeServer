const http = require("http");

const route = require("./routes");

console.log(route.text);
const server = http.createServer(route.routeHandler);

server.listen(3000, () => console.log("connected"));
