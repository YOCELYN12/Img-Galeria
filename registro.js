
const RegistroForm = document.querySelector("#RegistroForm")
RegistroForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const Name = document.querySelector("#Name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value


    const Users = JSON.parse(localStorage.getItem("users")) || []
    const isUserRegistered = Users.find(user => user.email === email)

    if (isUserRegistered) {
        return alert("El usuario ya esta registrado")
    }

    Users.push({ Name: Name, email: email, password: password })
    localStorage.setItem("users", JSON.stringify(Users))
    alert("Registro exitoso")
    window.location.href = "login.html"

})


