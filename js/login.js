let login = () => {
    let usr = document.getElementById("usr").value
    let pwrd = document.getElementById("pwrd").value
    if (usr === "" || pwrd ===""){
        return 0;
    }
    if (usr === "viri" && pwrd === "stratford"){
        window.alert("Bienvenido :D")
        window.location.href = 'https://www.google.com/'
    }
    else{
        window.alert("Usuario o Contraseña incorrectos")
        window.location.reload()
    }
    return 0;
}
