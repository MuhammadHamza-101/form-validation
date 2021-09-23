let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')


function showError(input,message){
const formControl = input.parentElement;
formControl.className = "form-control error"
const small = formControl.querySelector('small');
small.innerText = message
};

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"

};
// to check if email is valid

function isValidEmail(email){
    
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// create event listener for submit button.....

form.addEventListener('submit', function (e) {

    // stop page from reloAding page....
    e.preventDefault();

    //  check if user is empty....

    if (username.value === "") {
        showError(username,"user name is required");
    }else{
        showSuccess(username)
    }
    if (email.value === "") {
        showError(email,"user email is required");
    }
    else if(!isValidEmail(email.value)){
        showError(email,"write in correct pattern")
    }
    else{
        showSuccess(email)
    }
    if (password.value === "") {
        showError(password,"password is required");
    }else{
        showSuccess(password)
    }
    if (password2.value === "") {
        showError(password2,"confirm password is required");
    }else{
        showSuccess(password2)
    }

})