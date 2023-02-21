class SocketService {
        connection(socket){
            socket.on('disconnection',()=>{
                console.log(`Dissconnect is:: ${socket.id}`);
            })

            socket.on('sendms', ms =>{
                console.log(`ms is:: ${ms}`);
                _io.emit('sendms',ms);
            })
        }
}
module.exports = new SocketService();