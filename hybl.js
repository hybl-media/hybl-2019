$(document).ready(function(){
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

    function nextStep(){
        currentStep++
        goToStep(currentStep);
    }
    function previousStep(){
        currentStep--
        goToStep(currentStep);
    }
    function goToStep(stepId){
        $(".estimering__step").removeClass("estimering__step--show").addClass("estimering__step--hidden");
        $(".estimering__step--" + stepId).removeClass("estimering__step--hidden").addClass("estimering__step--show");
    }
    function openEstimater(){
        currentStep = 1;
        $(".estimering__container").removeClass("estimering__init")
        $(".estimering__container").removeClass("estimering__close").addClass("estimering__open");
        setTimeout(function(){
            $("main").css("display","none");
        },700)
    }
    function closeEstimater(){
        $(".estimering__container").removeClass("estimering__open").addClass("estimering__close");
        currentStep = 1;
        $("main").css("display","block");

    }
})

    
