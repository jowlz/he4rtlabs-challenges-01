function calcular(){
    var tempoDiario = document.getElementById('tempoDiario');
    var diasTrabalhados = document.getElementById('diasTrabalhados');
    var ferias = document.getElementById('ferias');
    var custoProjeto = document.getElementById('custoTotal');
    
    valorHora = (custoProjeto.value / (diasTrabalhados.value * 4 * tempoDiario.value) ) + ( ( ferias.value * diasTrabalhados.value * tempoDiario.value ) )
};