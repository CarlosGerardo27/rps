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