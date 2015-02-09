$(document).ready(function() {

  API_HOST = "https://api.verbalizeit.com/";
  AUTHENTICATE_PATH = "v2/users/authenticate";

  $.ajax({
     url: API_HOST + AUTHENTICATE_PATH,

    //  You need this to send the cookie with the request
     xhrFields: {
        withCredentials: true
     },

     success: function(data){
      var str = [data.email, data.authentication_token, data.avatar, data.public_name].join("<br/>");
       $("#login-status").html(str);
     },

     error: function(){
       $("#login-status").html("You are not logged in!");
     }
  });

});
