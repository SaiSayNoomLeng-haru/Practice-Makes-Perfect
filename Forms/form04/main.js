$(document).ready(()=>{
    $(document).on('click', '#sign-in-btn', function() {
        signIn();
    });

    $(document).on('click', '#create-btn', function() {
        register();
    });

    $(document).on('click', '#back-btn', function() {
        loadIndex();
    });
    $(document).on('click', '#to-sign-up', function(){
        register();
    });
    $(document).on('click', '#to-sign-in', function(){
        signIn();
    })

});

async function signIn(){
    try{
        const response = await fetch('logIn.html');
        const result = await response.text();
        document.getElementById('main-container').innerHTML = result;
    }
    catch(error){
        console.log(error);
    }
}

async function register(){
    try{
        const response = await fetch('register.html');
        const result = await response.text();
        document.getElementById('main-container').innerHTML = result;
    }
    catch(error){
        console.log(error);
    }
}
async function loadIndex(){
    try{
        const response = await fetch('index.html');
        const result = await response.text();
        document.getElementById('main-container').innerHTML = result;
    }
    catch(error){
        console.log(error);
    }
}