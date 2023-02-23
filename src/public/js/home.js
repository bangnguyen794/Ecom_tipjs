let socket = io();
// var chat = document.getElementById('txt_chat');
// console.log(chat);
// var btn_submit = document.getElementById('btn_submit');
function myFunction(){
    //var ms = document.getElementById('txt_chat').value;
    //socket.emit('sendms', ms);
    alert('okeee');

}

$("#btn_submit").on('click',()=>{
    let ms =$('#txt_chat').val();
    console.log(ms);
    if(ms==undefined) return;
    socket.emit('sendms', ms);
});


$("#txt_chat").on('keypress', function(e){
   if(e.which===13){
    e.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter
    $('#btn_submit').trigger('click'); // Kích hoạt sự kiện submit của form
   } 
});

socket.on('sendms',data =>{
    let id = data.id, ms=data.ms;
    $("#content-chat").append(`<li>
    <span class="text-muted">${id}</span>
    <p  class="text-danger">${ms}</p>
</li>`);
    $('#txt_chat').val('');
    console.log('Nhận dữ liệu: ',data);
})