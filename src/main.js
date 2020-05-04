function calcular(){
    var horasDiarias = document.getElementById('horasDiarias');
    var diasEfetivos = document.getElementById('diasEfetivos');
    var diasFerias = document.getElementById('diasFerias');
    var valorProjeto = document.getElementById('valorProjeto');

    var valorHora = (valorProjeto.value / (diasEfetivos.value * 4 * horasDiarias.value) ) + ( ( diasFerias.value * diasEfetivos.value * horasDiarias.value ) )

    document.getElementById('resultado').innerHTML = `Sua hora vale em média R$${parseFloat(valorHora).toFixed(2)} !`;
};