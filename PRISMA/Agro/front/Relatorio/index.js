import Chart from 'chart.js/auto';

// var data = [{
//     "data_inicio":"20-09-2020",
//     "valor_gasto":"222"
// }]

fecth('http://localhost:3000/manu')
.then(resp => resp.json())
.then(data => {
    const manutencao = data;
    const tabela = document.getElementById('ManuGrafico');
    for (let manu of manutencao){
    const linha = document.createElement('tr');
    const colunaData = document.createElement('td');
    colunaData.textContent = manu.data_inicio;
    const colunaPreco = document.createElement('td');
    colunaPreco.textContent = manu.valor_gasto;
    linha.appendChild(colunaData);
    linha.appendChild(colunaPreco);
    tabela.appendChild(linha)
   }
});



const canva = document.getElementById('ManuGrafico');

const ManuGrafico = new Chart(canva, {
    type: 'bar',
    data: {
        labels: data.map(item => item.data_inicio),
        datasets: [{
            label: 'Gráfico Manutenção',
            data: data.map(item => item.valor_gasto),
            backgroundColor: 'Green',
            borderWidth: 1
        }]
    },
    options: {
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero: true
                }
            }]
        }
    }
});

