const http = require("node:http");
const PORT = 8087;


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log("url", url, method);

    if(url === "/") {
        if(method === "GET") {
            res.write("welcome to the home page ");
            res.write(" hello utkarsh");
            res.end();
        } else {
            res.writeHead(405) // in here you do not send real data, you set some metadata
            res.end("this is not allowed");
        }
        
    } else if (url === "/contact") {
        res.end("this is a contact");
    } else if (url === "/fitness") {
        const dietchart = {
            name: "utkasrh",
            height: 175,
            weight: 70,
            diet: ["eggs", "protien"],
            address: {
                street: "abc street",
                housenumber: 3233
            },
            shouldSleep8Hours: true,
            createDate: new Date().toDateString(),
        }

        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(dietchart));

    }
});



server.listen(PORT, () => {
    console.log("THUMBS UP, I am up and running at port number " + PORT);
})