const http = require("./src/main");
const port = process.env.port|2023;

const server =  http.listen(port,()=>{
    console.log(`run: ${port}`);
});
process.on('SIGINT',()=>{
    server.close(()=> console.log(`close serrver`) );
})