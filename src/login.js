document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log("Login attempted:", username, password);
});
