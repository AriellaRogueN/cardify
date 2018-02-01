'use strict';

const $ = require('jquery');

$(document).ready(function()
  $(".content img").mouseover(function(){
       
    let imagenFifure = $(this).attr("alt");
    $(this).each(function(){
    $(this).wrap('<figure></figure>')
     $('figure').css({
          'display': 'inline-block',
           'border': '3px solid #eee',
           'width': '250px',
           'margin':'30px',
           'z-index' : '10',
           
         })    
   $('content').css({
          'float':'left',
          'width':'30%',

           
         })    
   
       
     $('figure').append('<figcaption>' + imagenFifure + '</figcaption>')
    $('figcaption').css({'text-align': 'center',
     'padding': '5px 10px',
     'border-radius': '2px',
     'display': 'inline-block',
     'background': '#ed4e6e',
     'color': '#fff',
     'width':'93%',
                    
           
        });

 });

    })
  });
   $(".content img").mouseout(function(){
    $('img').unwrap();
   $('figcaption').remove();
   
       
 }); 

  











  
