// menu toggle
$(document).ready(() => {
    $(document).on('click', '#menu-pizza',  (e) => {
        $('#btn-group').children().removeClass('btn-active'); 
        $(e.currentTarget).addClass('btn-active');
        
        const buttonId = e.currentTarget.id;
        loadContent(buttonId);
    });

    $(document).on('click', "#menu-drinks", (e) => {
        $('#btn-group').children().removeClass('btn-active');
        $(e.currentTarget).addClass('btn-active');
        const buttonId = e.currentTarget.id;
        loadContent(buttonId);
    });

    $(document).on('click', '#menu-pasta', (e)=>{
        $('#btn-group').children().removeClass('btn-active');
        $(e.currentTarget).addClass('btn-active');
        const buttonId = e.currentTarget.id;
        loadContent(buttonId);
    })

    $(document).on('click', '#menu-burgers', (e) => {
        $('#btn-group').children().removeClass('btn-active');
        $(e.currentTarget).addClass('btn-active');
        const buttonId = e.currentTarget.id;
        loadContent(buttonId);
    });

    $(document).on('click', '#menu-salads', (e) => {
        $('#btn-group').children().removeClass('btn-active');
        $(e.currentTarget).addClass('btn-active');
        const buttonId = e.currentTarget.id;
        loadContent(buttonId);
    });

    $(document).on('click', '#menu-desserts', (e) => {
        $('#btn-group').children().removeClass('btn-active');
        $(e.currentTarget).addClass('btn-active');
        const buttonId = e.currentTarget.id;
        loadContent(buttonId);
    });

    const oddTable = $('#table tr:last-child');
    oddTable.css('background-color' ,'red');
});

async function loadContent(name){
    try{
        const response = await fetch( `${name}.html`);
        const result = await response.text();
        document.getElementById('menu-body').innerHTML = result;
    }
    catch(error){
        console.log(error);
    }
}
//end menu toggle

