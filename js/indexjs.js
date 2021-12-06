$(document).ready(main);

var contador = 1;

function main (){
    $('.menu_bar').click(function(){
        if (contador ==1){
            $('nav').animate({
                top:'58.8px'
                //right:'0%'
                
            });
            contador = 0;
        } else{
            contador = 1;
            $('nav').animate({
                top:'-250%'
                //right:'-100%'
                
            });
        }
    });
}