$(document).ready(()=>{
    const container1 = $('#container1');
    const container2 = $('#container2');

    const signUp = $('#sign-up-btn');
    const signIn = $('#sign-in-btn');

    const left1 = $('#left1');
    const left2 = $('#left2');

    const right1 = $('#right1');
    const right2 = $('#right2');

  
    signUp.click(()=>{
        left1.addClass('animated-left');
        right1.addClass('animated-right');
        
        setTimeout(()=>{
            container1.addClass('hide');
            
            left1.removeClass('animated-left');
            right1.removeClass('animated-right');
            container2.removeClass('hide');
        },1000);
      
    });

    signIn.click(()=>{
        left2.addClass('animated-left');
        right2.addClass('animated-right');

        setTimeout(()=>{
            container2.addClass('hide');
            
            left2.removeClass('animated-left');
            right2.removeClass('animated-right');
            container1.removeClass('hide');
        },1000)
    });


});
