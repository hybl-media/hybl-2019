/* ---> class .on bliver tilføjet til burgermenu + class slideIn til menuPunkter<--- */

$("#burgerMenu").click(function() {
    $(this).toggleClass("on");
    $("#menuPunkter").toggleClass("slideIn");
  });
    
  $(".menuLinks").click(function() {
    $("#menuPunkter").toggleClass("slideIn");
    $("#burgerMenu").toggleClass("on");
  });
  
  /* ---> Burgermenu bliver sort ved scroll <--- */
  
  $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
        $("#burgerMenu").children().css("background" , "black");
        }
  
        else{
        $("#burgerMenu").children().css("background" , "#23595A");
        }
    })
  })
  
  