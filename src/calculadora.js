function somarDoisNumeros(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado;
}
function cacularMediaDeDoisnumeros(valor1, valor2) {
    const resultadoSomaDeDoisvalores = somarDoisNumeros(valor1,valor2);
    const resultadoDaMediadeDoisValores = resultadoSomaDeDoisvalores / 2;
    return resultado;
}

module.exports = {
    somarDoisNumeros
}


// function realizarsomadatela(valor1, valor2) {
//     const valor1 = parseFloat(document.getElementById("numero1").value);
//     const valor2 = parseFloat(document.getElementById("numero2").value);
//     const resultado = Somardoisnumeros(valor1, valor2);
//     document.getElementById("resultado").innerText = "O resultado é: " + resultado;
// }