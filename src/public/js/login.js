

$(document).ready(function() {
    $('#login-btn').click(function() {
      var username = $('#username').val();
      var password = $('#password').val();
      $.ajax({
        url: '/login',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ username: username, password: password }) ,
        success: function(data) {
             window.location.assign('/');
          //alert('Login_succes');
        },
        error: function(err) {
           console.log(err);
        }
      });
    });
  });