import http from "http";

const server = http.createServer(function (req, res) {
  if (req.url === "/api/success") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Hello World" }));
    res.end();
    return;
  }

  if (req.url === "/api/fail") {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Bad Request" }));
    res.end();
    return;
  }

  res.statusCode = 500;
  res.write(JSON.stringify({ message: "Route not found!" }));
  res.end();
});

server.listen(5000);

console.log("Node.js web server at port 5000 is running..");
