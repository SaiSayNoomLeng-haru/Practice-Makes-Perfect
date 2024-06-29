//async
// $(document).ready(()=>{
//     const signUp = $('#sign-in-btn');
//     const signInForm = $('#sign-in-form')
//     signUp.click((event) => {
        
//     })
// })

const signUp = document.getElementById('sign-in-btn');
const signIn = document.getElementById('sign-in-btn');

signUp.addEventListener('click', signUpForm);
signIn.addEventListener('click', signInForm);

//load form
// async function signUpForm(){
//     try{
//         const response = await fetch('signUp.html');
//         const result = response.text();
//         document.getElementById('main').innerHTML = result;
//     }
//     catch(error){
//         console.error(error);
//     }
// }

async function signInForm(){
    try{
        const response = await fetch('signIn.html');
        const result = response.text();
        document.getElementById('main').innerHTML = result;
    }
    catch(error){
        console.error(error);
    }
}


