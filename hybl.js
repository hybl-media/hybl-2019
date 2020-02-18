$(document).ready(function(){

    var isMobile;
    var $window = $(window);

    function checkWidth() {

        isMobile = true;
        var windowsize = $window.width();
        if (windowsize > 769) {
            isMobile = false;
        }
        
        if (isMobile) {
            $(".services__info-webshop").appendTo(".info-text-under-webshop");
            $(".services__info-film").appendTo(".info-text-under-film");
            $(".services__info-illustration").appendTo(".info-text-under-illustration");
            $(".services__info-webdesign").appendTo(".info-text-under-webdesign");
        } else {
            $(".services__info-webshop").appendTo(".services__info");
            $(".services__info-film").appendTo(".services__info");
            $(".services__info-illustration").appendTo(".services__info");
            $(".services__info-webdesign").appendTo(".services__info");

            startCycleLoop();

            $(".estimering__step-website").hover(function() 
            {iconShow("website")}, function() {iconsHide()});
        
            $(".estimering__step-cart").hover(function() 
            {iconShow("cart")}, function() {iconsHide()});
        
            $(".estimering__step-pen").hover(function() 
            {iconShow("pen")}, function() {iconsHide()});
        
            $(".estimering__step-film").hover(function() 
            {iconShow("film")}, function() {iconsHide()});

            $(".services__webshop").hover(function(){
                showInfo("webshop");
                cycleInfo = false;
            })
            $(".services__film").hover(function(){
                showInfo("film");
                cycleInfo = false;
            })
            $(".services__illustration").hover(function(){
                showInfo("illustration");
                cycleInfo = false;
            })
            $(".services__webdesign").hover(function(){
                showInfo("webdesign");
                cycleInfo = false;
            })
        }


    }
    
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
    // Estimer projekt

    const animationTime = 700 // miliseconds for open and close 

    var currentStep = 1;
    $(".estimering__open").click(function(){
        openEstimater();
    });
    $(".estimering__exit").click(function(){
        closeEstimater();
    });
    $(".estimering__step--1 input, .estimering__step--next").click(function(){
        nextStep();
    });
    $(".estimering__step--back").click(function(){
        previousStep();
    });

    function openEstimater(){
        currentStep = 1;
        $(".estimering__container").removeClass("estimering__init")
        $(".estimering__container").removeClass("estimering__close").addClass("estimering__open");
        $(".estimering__container").css("display","flex");
        setTimeout(function(){
            $("main").css("display","none");
        },animationTime)
    }
    function closeEstimater(){
        $(".estimering__container").removeClass("estimering__open").addClass("estimering__close");
        currentStep = 1;
        $("main").css("display","block");
        setTimeout(function(){
            $(".estimering__container").css("display","none");
        },animationTime)
    }

    function nextStep(){
        var emptyFields = checkStepValidation(currentStep)
        if (emptyFields.length == 0){
            currentStep++
            goToStep(currentStep);
        }
    }
    function previousStep(){
        currentStep--
        goToStep(currentStep);
    }
    function goToStep(stepId){
        $(".estimering__step").removeClass("estimering__step--show").addClass("estimering__step--hidden");
        $(".estimering__step--" + stepId).removeClass("estimering__step--hidden").addClass("estimering__step--show");
    }
    // Form validation

    function checkStepValidation(stepId){
        var inputs = $(".estimering__step--" + stepId + " input:required, .estimering__step--" + stepId + " textarea:required");
        var emptyFields = []
        inputs.each(function(input){
            if(!$(this).val()){
                emptyFields.push($(this).data("desc"));
            }
        });
        if (emptyFields.length > 0){
            var emptyMessage = " "
            $.each(emptyFields, function(index, value){
                if(index == 0){
                    emptyMessage = emptyMessage + value;
                }else if(index == (emptyFields.length - 1)){
                    emptyMessage = emptyMessage + " og " + value;
                }else{
                    emptyMessage = emptyMessage + ", " + value;
                }
            })
            $('.estimering__step--' + stepId + ' .estimering__notification').html("Du mangler at udfylde" + emptyMessage);
            $('.estimering__step--' + stepId + ' .estimering__notification').show()
        }else{
            $('.estimering__step--' + stepId + ' .estimering__notification').hide()
        }

        return emptyFields
    }

    $('.estimering__step--confirm').click(function() { // When estimation is confirmed and sent to us
        var emptyFields = checkStepValidation(currentStep)
        if (emptyFields.length == 0){
            var post_data = $('#estimering__submit').serialize();
            $.post('mail.php', post_data, function(data) {
                var username = $('.estimering__step--input input[name="name"]').val();
                console.log("username")
                $('.estimering__step--notification span').html(username);
                console.log("Form submitted");
                nextStep();
            });
        }

      });

    // Services icon hover effekt



    function iconShow(icon) {
        $(".estimering__icons img").hide();
        $(".estimering__icon-" + icon).show();

    }

    function iconsHide(){
        $(".estimering__icons img").hide();

    }

    // Services info text



    function showInfo(service){ // Hvis info tekst baseret på service
        var infoText = $(".services__info-" + service);
        var infoTextAll = $(".services__info-text");

        infoTextAll.removeClass("services__info--show");
        infoText.addClass("services__info--show");
    }

    var cycleInfo = true;

    function startCycleLoop(){ // Loop igennem de forskellige services
        var services = ["webshop", "film", "illustration", "webdesign"];
        var current = 0;

        setInterval(function cycle(){
            if(cycleInfo){ // Kør kun loop hvis brugeren ikke har interageret
                showInfo(services[current]);
                $(".services__block").removeClass("simulated-hover");
                $(".services__" + services[current]).addClass("simulated-hover");

                if(current != 3){
                    current++
                }else{
                    current = 0;
                }
            }
            return cycle;
        }(), 4000)
    }



    $(".services__block").hover(function(){ // Fjern simuleret hover effekt hvis brugeren selv interagerer
        $(".services__block").removeClass("simulated-hover");
    })

    // ryk af service tekst til telefon



    //CASES
    var currentCase;

    $(".cases__item-container").click(function(){
        currentCase = $(this).attr("data-id");
        openCase(currentCase);
    });
    $(".case__exit").click(function(){
        closeCase(currentCase);
    });

    function closeCase(currentCase){
        $(".case[data-id='" + currentCase + "']").removeClass("case__opening");
        $(".case[data-id='" + currentCase + "']").addClass("case__closing");
        currentCase = "";
        $("main").css("display","block");
        window.scrollTo(0,0);
    }
    function openCase(currentCase){
        $("main").css("display","none");
        $(".case[data-id='" + currentCase + "']").removeClass("case__closing");
        $(".case[data-id='" + currentCase + "']").addClass("case__opening");
        window.scrollTo(0,0);
    }
})

    
