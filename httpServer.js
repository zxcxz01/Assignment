const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
    console.log('server ready...');
});
app.get('/', function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.use(express.static(path.join(__dirname, '..', '06_14_node')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '06_14_node', 'index.html'));
});
// const http = require("http");

// const server = http.createServer((req,res) =>{
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h1>hello world</h1>");
// });

// server.listen(3000, "127.0.0.1",()=>{
//     console.log("server ready...");
// });
