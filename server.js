import { handler } from "./build/handler.js";
import http2 from "http2";
import fs from "fs";

const port = 1337;
const server = http2.createSecureServer(
  {
    key: fs.readFileSync("./localhost-privkey.pem"),
    cert: fs.readFileSync("./localhost-cert.pem"),
    allowHTTP1: false,
  },
  handler
);

server.listen(port, () => {
  console.log("🍱 Server running on port: " + port);
});
