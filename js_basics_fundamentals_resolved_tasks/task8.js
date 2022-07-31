let username = "admin_1"
let password = "qwerty2"
let inputUsername = prompt("Please enter username", "");
let inputPassword = prompt("Please enter password", "");
if (inputPassword === password && inputUsername === username) {
    alert("Hello!");
} else if (inputUsername === username && inputPassword != password) {
    alert("Wrong password! ");
} else if (inputPassword === password && inputUsername != username) {
    alert("Wrong username!");
}else alert("Validation error!");