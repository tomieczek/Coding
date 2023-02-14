const username = document.getElementById('name')
const email = document.getElementById("email")
const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")
const errorElement = document.getElementById('error')
const form = document.querySelector('form')

username.value = "owo"
form.addEventListener('submit', (e) => {
    let messages = []
    if (username.value === '' || username.value == null){
        // messages.push 
       console.log('Name is required')
       console.log(e)
    }

 })

function toggleLanguage(id){ // Changes language to the other one 
const language = document.getElementById(id)
if (language == "cz"){
language
}
}
function togglePassword(id){ // Changes type input from password to text
    const element = document.getElementById(id);
    if (!element){
        return
    }
    if (element.type == "password") {
        element.type = "text"
    } else {
        element.type = "password"
    }
}

