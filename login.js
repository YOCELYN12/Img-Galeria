const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const email = document.querySelector ("#email").value
    const password = document.querySelector ("#password").value
    const Users = JSON.parse(localStorage.getItem("users")) || []
    const validUser = Users.find(user => user.email === email && user.password ===password)
    if (!validUser){
        return alert ("Usuario o contraseña inconrrectos!")
    }

    alert ( `Bienvenido ${validUser.Name}`)
    window.location.href = "home.html"

})

