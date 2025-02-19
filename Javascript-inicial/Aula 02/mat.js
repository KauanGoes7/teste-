function somar() {
    var numero1 = parseFloat(document.getElementById("n1").value) || 0;
    var numero2 = parseFloat(document.getElementById("n2").value) || 0;
    var res = document.getElementById("res-soma");
    res.innerHTML = numero1 + numero2;
}

function subtrair() {
    var numero1 = parseFloat(document.getElementById("n3").value) || 0;
    var numero2 = parseFloat(document.getElementById("n4").value) || 0;
    var res = document.getElementById("res-subtracao");
    res.innerHTML = numero1 - numero2;
}

function multiplicar() {
    var numero1 = parseFloat(document.getElementById("n5").value) || 0;
    var numero2 = parseFloat(document.getElementById("n6").value) || 0;
    var res = document.getElementById("res-multiplicacao");
    res.innerHTML = numero1 * numero2;
}

function dividir() {
    var numero1 = parseFloat(document.getElementById("n7").value) || 0;
    var numero2 = parseFloat(document.getElementById("n8").value) || 0;
    var res = document.getElementById("res-divisao");
    res.innerHTML = numero1 / numero2;
}

function media() {
    var numero1 = parseFloat(document.getElementById("m1").value) || 0;
    var numero2 = parseFloat(document.getElementById("m2").value) || 0;
    var numero3 = parseFloat(document.getElementById("m3").value) || 0;
    var numero4 = parseFloat(document.getElementById("m4").value) || 0;
    var numero5 = parseFloat(document.getElementById("m5").value) || 0;
    var res = document.getElementById("respMedia");
    var soma = numero1 + numero2 + numero3 + numero4 + numero5;
    var media = soma / 5;
    res.innerHTML = media;
    var msg = document.getElementById("msg");
    if (media >= 7) {
        msg.innerHTML = "Aprovado";
    } else {
        msg.innerHTML = "Reprovado";
    }
}
function IMC(){
    var numero1 = parseFloat(document.getElementById("p1").value)
    var numero2 = parseFloat(document.getElementById("a1").value)
    var res = document.getElementById("mensagem")

    var resultado =  (numero2*numero2) / numero1
    res.innerHTML = resultado;
    var msg = document.getElementById("mensagem")

    if (resultado >= 40){
        msg.innerHTML = "Obesidade Grau III";
    }else if(resultado >= 35 && resultado <= 39.5){
        msg.innerHTML = "Obesidade Grau II";
    }else if(resultado >= 35 && resultado <= 39.5){
        msg.innerHTML = "Obesidade Grau I"
}

}



