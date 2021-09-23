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
//functon to check reqiured fields
function checkReqiured(inputArray){

inputArray.forEach(input => {
    // console.log(input.value);
    if(input.value === ""){
        showError(input,`${getTextField(input)} is invalid`)
    }else{
        showSuccess(input)
    }
});
};
//function to det id of text feild
function getTextField(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}
//check lenght username and password
function checkLength(input,min,max){
    if(input.value.length < min){

        showError(input,`${getTextField(input)} needs to be at least ${min} characters`);

    }else if(input.value.length > max){

        showError(input,`${getTextField(input)} needs to be less than ${max} characters`);

    }else{
        showSuccess(input);
    }
};
//function if password and confrm password is match
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,"password is not match")
    }
}

// create event listener for submit button.....

form.addEventListener('submit', function (e) {

    // stop page from reloAding page....
    e.preventDefault();

    //  destructing if user is empty methood....

    checkReqiured([username,email,password,password2])
    checkLength(username,5,10);
    checkLength(password,6,20);
    checkPasswordMatch(password,password2)

    

});