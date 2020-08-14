module.exports = {calcularArea, america, europa, argentina, superior, age, fibonacci};

function calcularArea(largura, altura){
    return altura * largura;
}

function america(dolar){
    var calculo = dolar * 3.78;
    console.log(`Dólar em R$${calculo}`);
    return calculo;
}

function europa(euro){
    var calculo = euro * 4.21;
    console.log(`Euro em R$${calculo}`);
    return calculo;
}

function argentina(peso){
    var calculo = peso * 0.08;
    console.log(`Peso em R$${calculo}`);
    return calculo;
}

function superior(a, b){
    var maior = a;
    if(a > b){
        maior = a;
    }
    if(b > a){
        maior = b;
    }
    console.log(`O valor maior é: ${maior}`)
}

function age(idade){
    if(idade < 13){
        console.log("Criança");
    }
    if(idade > 13 && idade <= 18){
        console.log("Adolescente");
    }
    if(idade > 18 && idade <= 60){
        console.log("Adulto");
    }
    else{
        console.log("Véio"); 
    }
}

function fibonacci(numero){
    var k;
    var x = 1;
    var y = 1;
    for(var i = 0; i <= numero; i++){
        k = x + y;
        x = y;
        y = k;
        console.log(`Valores fibo: ${y}`);;
    }
}

