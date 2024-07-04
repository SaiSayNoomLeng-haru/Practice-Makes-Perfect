$(document).ready(()=>{
    $(document).on('click', '#service-btn', (e)=>{
        loadContent();
        e.currentTarget.id = 'less';
        $(e.currentTarget).html('View Less &nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i>');
    });

    $(document).on('click', '#less', (e)=>{
        loadInitial();
        e.currentTarget.id = 'service-btn';
        $(e.currentTarget).html('View More &nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i>');
    })

   
});
async function loadContent(){
    try{
        const response = await fetch('service.html');
        if(!response.ok){
            console.log('fetch error');
        }
        else{
            const result = await response.text();
            document.getElementById('service-card-container').innerHTML = result;
        }
    }
    catch(error){
        console.log(error);
    }
}

async function loadInitial(){
    try{
        const response = await fetch('initial-index.html');
        if(!response.ok){
            console.log('fetch error');
        }
        else{
            const result = await response.text();
            document.getElementById('service-card-container').innerHTML = result;
        }
    }
    catch(error){
        console.log(error);
    }
}