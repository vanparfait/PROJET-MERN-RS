const http = require("http");
const app = require("./app");
require("dotenv").config({ path: "./config/.env" });

const server = http.createServer(app);

server.listen(5000);
