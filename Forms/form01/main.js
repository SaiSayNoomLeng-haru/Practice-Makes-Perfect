//toggle
const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');

signUp.addEventListener('click', ()=>{
    signUp.classList.add('active');
    signIn.classList.remove('active');
});

signIn.addEventListener('click', () => {
    signIn.classList.add('active');
    signUp.classList.remove('active');
})

//validation
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email1 = document.getElementById('email1');
    const email2 = document.getElementById('email2');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const message = document.getElementById('message');

    let valid = true;

    message.textContent = '';

    //email validation
    if(email1.value !== email2.value){
        email1.classList.add('shake');
        email2.classList.add('shake');
        message.textContent += 'Emails must match!';
        valid = false;
    }

    //password validation
    if(password1.value !== password2.value){
        password1.classList.add('shake');
        password2.classList.add('shake');
        message.textContent += 'Passwords must match!';
        valid = false;
    }

    //remove shake
    setTimeout(()=>{
        email1.classList.remove('shake');
        email2.classList.remove('shake');
        password1.classList.remove('shake');
        password2.classList.remove('shake');
    }, 500);

    if(valid){
        message.textContent = 'Submitted!';
    }
})

//checkbox checked
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        const submit = document.getElementById('submit');
        submit.disabled = false;
    }else{
        submit.disabled = true;
    }
});
    



