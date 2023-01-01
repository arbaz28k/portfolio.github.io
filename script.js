/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    
    $(window).on('scroll load',function(){  
         $('menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
    
    
    //smooth scrolling;
    $('a[href*="#"]').on('click',function(e){
     
     e.preventDefault();
     $('html,body').animate({
         scrollTop: $($(this).attr('href')).offset().top,
     },
     500,
     'linear'
      );
   
    });

});

