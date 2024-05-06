const Name = document.getElementById('Name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const RegistroForm = document.getElementById("RegistroForm")

let nameLocalStorage 
let mailLocalStorage
let contrasenaLocalStorage 

RegistroForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    localStorage.setItem("name", Name.value)
    localStorage.setItem("mail", email.value)
    localStorage.setItem("contrasena", password.value)
    
    nameLocalStorage = localStorage.getItem("name");

    if (Name.value === nameLocalStorage){
        return alert('El usuario ya esta registrado!')
    }
    alert('Registro exitosooooo! 😊')

    window.location.href = "login.html"
})

