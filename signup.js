$(document).ready(function(){
    $("#myBtn").click(function(){
      $("#myModal").modal();
    });
  });

  function nomatch() {
    alert("The password doesn't match pls re-enter the password");
}

function login(){
  window.location.href='login.html';
}