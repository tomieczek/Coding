
function toggleLanguage(id){ // Changes language to the other one 
const language = document.getElementById(id)
if (language == "cz"){
language.
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