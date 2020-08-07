$(document).ready(function(){
    var close= $("#close")
    var opacity = $(".opacity")
    var darules = $("#the-rules")
    var rulesButton = $("#rules")
    var scissor = $("#scissor")
    var paper = $("#paper")
    var rock = $("#rock")
    var spock = $("#spock")
    var lizard = $("#lizard")
    var playerOpt = $(".player-option")
    var step2 = $("#step2")
    var step1 = $("#frame")

close.click(function(){
        opacity.addClass("hide")
        darules.addClass("hide")
})

rulesButton.click(function(){
    opacity.removeClass("hide")
    darules.removeClass("hide")
})

opacity.click(function(){
    opacity.addClass("hide")
    darules.addClass("hide")
})

playerOpt.click(function(){
    step1.addClass("hide")
    step2.removeClass("hide")   
})



})

window.addEventListener("load",function(){
    var p1Scissors = document.getElementById("scissors")
    var pickScissors= document.getElementById("pick-scissor")
    
    var p1Paper = document.getElementById("paper")
    var pickPaper= document.getElementById("pick-paper")
    
    var p1Rock = document.getElementById("rock")
    var pickRock= document.getElementById("pick-rock")
    
    var p1Spock = document.getElementById("spock")
    var pickSpock= document.getElementById("pick-spock")
    
    var p1Lizard = document.getElementById("lizard")
    var pickLizard= document.getElementById("pick-lizard")
    
    
    /* Instrucciones para el step2
    cuando se hace click en algun icono, se remueve la clase hide
    en la segunda pantalla del elemento clikeado en el step1 */
    
    p1Scissors.addEventListener("click",function(){
        console.log("You picked Scissors")
        pickScissors.classList.remove("hide")
    })

    p1Paper.addEventListener("click",function(){
        console.log("You picked Paper")
        pickPaper.classList.remove("hide")
    })

    p1Rock.addEventListener("click",function(){
        console.log("You picked Rock")
        pickRock.classList.remove("hide")
    })

    p1Lizard.addEventListener("click",function(){
        console.log("You picked Lizard")
        pickLizard.classList.remove("hide")
    })
    p1Spock.addEventListener("click",function(){
        console.log("You picked Spock")
        pickSpock.classList.remove("hide")
    })
    
    /*  */

    })


