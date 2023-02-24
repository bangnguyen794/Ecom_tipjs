const http = require("./src/main");
const {app:{port}} = require('./src/configs/env.config')
const server =  http.listen(port,()=>{
    console.log(`run port: ${port}`);
});
process.on('SIGINT',()=>{
    server.close(()=> console.log(`close serrver`) );
})