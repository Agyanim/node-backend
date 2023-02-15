const http=require("http");
const date=require("./getDate")
const server=http.createServer((req,res)=>{
    res.writeHead(200);
    res.end(`server started and listening on port ${port} at time ${date.getDate()}`)
})
const port="8080"
console.log(`server started and listening on port ${port} at time ${date.getDate()}`);
server.listen(port)