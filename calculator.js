$(document).ready(function() {
    $('#start-calculate').click(function(){
        let powderChoice = $('#powder-name').children("option:selected").val();      
        calculater(powderChoice);
    })
});

function calculater(powder){
    switch(powder){
        case "flour": convertor(1.5, "Flour"); break;
        case "bakingP": convertor(); break;
    }
}

function convertor(convertRate, powderName){
    let gramsNeeded = $('#powder-potion').val();
    let result = gramsNeeded * convertRate;
    $("#result").text("You need " + result + " for " + powderName);
}