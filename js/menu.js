/* ---> class .on bliver tilføjet til burgermenu + class slideIn til menuPunkter<--- */

$("#burgerMenu").click(function() {
    $(this).toggleClass("on");
    $("#menuPunkter").toggleClass("slideIn");
    $("#overlay").toggleClass("overlayOn");
    $("#burgerDivId").toggleClass("burgerDiv");
  });
    
  $(".toggle-menus, .vertical-text, #overlay").click(function() {
    $("#menuPunkter").toggleClass("slideIn");
    $("#burgerMenu").toggleClass("on");
    $("#overlay").toggleClass("overlayOn");
    $("#burgerDivId").toggleClass("burgerDiv");
  });
  
  $("#burgerDivId").click(function() {
    $(this).toggleClass("burgerDiv");
    $("#menuPunkter").toggleClass("slideIn");
    $("#burgerMenu").toggleClass("on");
    $("#overlay").toggleClass("overlayOn");
  });

  $(document).ready(function () {
    $(document).keydown(function(e){

        if(e.keyCode == 27) {
            $("#menuPunkter").toggleClass("slideIn");
            $("#burgerMenu").toggleClass("on");
            $("#overlay").toggleClass("overlayOn");
            $("#burgerDivId").toggleClass("burgerDiv");
        }
    });
})
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
  
  