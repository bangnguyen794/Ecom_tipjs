class SocketService {
        connection(socket){
            let id =socket.id;
            socket.on('disconnect',()=>{
                console.log(`Dissconnect is:: ${socket.id}`);
            })

            socket.on('sendms', ms =>{
                console.log(`ms is:: ${ms}`);
                _io.emit('sendms', {id:id,ms : ms});
            })
        }
}
module.exports = new SocketService();