$(document).ready(function(){
    $('.peso').mask('000');
    $('.altura').mask('0.00');

    $('.result-div').css("display", "none");

    btn = document.querySelector(".btn");
});

function calcularIMC() {
    peso = (document.querySelector(".peso").value);
    altura = (document.querySelector(".altura").value);
    result = peso / (altura * altura);
    arredondado = parseFloat(result.toFixed(2));

    console.log(result); 
    console.log(arredondado);
    if (result < 18.5){
        $('#resultado').text("Você está abaixo do peso com um IMC de: " + arredondado);
    }
    else if (result >= 18.5 && result < 24.9){
        $('#resultado').text("Você está normal com um IMC de: " + arredondado);
    }
    else if (result >= 25 && result < 29.9){
        $('#resultado').text("Você está com sobrepeso com um IMC de: " + arredondado);
    }
    else if (result >= 30 && result < 39.9){
        $('#resultado').text("Você está com obesidade com um IMC de: " + arredondado);
    }
    else if (result > 40){ 
        $('#resultado').text("Você está com obesidade grave com um IMC de: " + arredondado);
    }

    $('.result-div').css("display", "block");
    $('.calc-div').css("display", "none");
}

function calcularNovamente() {
    //apagar os valores dos inputs
    $("#peso-id").val("");
    $("#altura-id").val("");

    //mostrar a div calc-div
    $('.calc-div').css("display", "block");

    //esconder a div result-div
    $('.result-div').css("display", "none");  
} 