const http = require('http');


const server = http.createServer(
    (Request, Response) => {
        console.log(Request.url);
        if ((Request.url === "/" || Request.url === "/home") && Request.method === "GET") {
            Response.setHeader("content-type", "text/html");
            Response.read();
            Response.write("<meta charset='utf8'> <h1>Vous êtes sur la home page</h1>");
            Response.end();
        } else {
            Response.setHeader("content-type", "text/html", "meta", "utf8");
            Response.write("Error 404 : page non valid");
            Response.end();
        }
    }
);
// Request.method

server.listen(3000, "localhost", () => {
    console.log("server is listening on port '3000'");
});

