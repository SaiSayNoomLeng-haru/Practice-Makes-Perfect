//toggle and Load
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');
const signUpheader = document.getElementById('sign-up-header');
const signInheader = document.getElementById('sign-in-header');

signIn.addEventListener('click', toggleToSignIn);
signUp.addEventListener('click', toggleToSignUp);
signInheader.addEventListener('click', toggleToSignIn);
signUpheader.addEventListener('click', toggleToSignUp);

function toggleToSignUp(){
    signUp.classList.add('toggle');
    signIn.classList.remove('toggle');
    signUpheader.classList.add('form-header-toggle');
    signInheader.classList.remove('form-header-toggle');
    signUpForm();
}

function toggleToSignIn(){
    signIn.classList.add('toggle');
    signUp.classList.remove('toggle');
    signInheader.classList.add('form-header-toggle');
    signUpheader.classList.remove('form-header-toggle');
    signInForm();
}
//load form
async function signInForm(){
    try{
        const response = await fetch('signin.html');
        const result = await response.text();
        document.getElementById('main-form').innerHTML = result;
        formValidationListner();
    }
    catch(error){
        console.error(error);
    }
}

async function signUpForm(){
    try{
        const response = await fetch('signup.html');
        const result = await response.text();
        document.getElementById('main-form').innerHTML = result;
        formValidationListner();
    }
    catch(error){
        console.error(error);
    }
}

//validation
function formValidationListner(){
    const form = document.getElementById('form02');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const message = document.getElementById('error-message');

    
    let valid = true;
    message.textContent = '';

    //validate password
    if(password1.value !== password2.value){
        password1.classList.add('border-red');
        password2.classList.add('border-red');
        message.textContent += 'Passwords Must Match!'
        valid = false;

        setTimeout(()=>{
            password1.classList.remove('border-red');
            password2.classList.remove('border-red');
        }, 1000);
    }
});
//checkbox
const checkbox = document.getElementById('checkbox');
if (checkbox) {
    checkbox.addEventListener('change', () => {
        const submit = document.getElementById('submit');
        if (submit) {
            submit.disabled = !checkbox.checked;
        }
    });
}
}





