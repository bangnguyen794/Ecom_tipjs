const http = require("./src/main");
const port = process.env.PORT|3001;

const server =  http.listen(port,()=>{
    console.log(`run: ${port}`);
});
process.on('SIGINT',()=>{
    server.close(()=> console.log(`close serrver`) );
})