

$(document).ready(function(){
    $("#button").click(function(){
      $("section").append(" <p>le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p>");
    });                           
  
     $("#button2").click(function(){
      $( "body" ).remove();
    });
  });