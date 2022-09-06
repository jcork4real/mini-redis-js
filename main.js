const net = require("net");

const server = net.createServer((connection) => {
  // Add event handler for data event, then respond with PONG
  connection.on("data", () => {
    connection.write("+PONG\r\n");
  });
});

server.listen(6379, "127.0.0.1");
