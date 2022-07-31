function logar(){
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value

    if(login == "admin" && password == "admin"){
        alert("sucess!");
        location.href = 'home.html'; 
    }
    else{
        alert("Incorret user or password!");
    }
}
