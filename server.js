const app = require("./src/main");
const port =2023;

const server =  app.listen(port,()=>{
    console.log(`run: ${port}`);
});
process.on('SIGINT',()=>{
    server.close(()=> console.log(`close serrver`) );
})