// const ctx = document.getElementById('myChart');
// const dados = {
//   candidatos: ['Brizola', 'Getúlio', 'Jucelino', 'Fernando', 'Mário Covas', 'Ulysses'],
//   votos: [1200, 1900, 300, 500, 200, 300]
// }

// Chart.defaults.font.size = 14;
// Chart.defaults.color = '#000066';

// new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: dados.candidatos,
//     datasets: [
//       {
//         label: 'Eleições - Contagem de Votos',
//         data: dados.votos,
//         borderWidth: 2,
//         backgroundColor: '#C8E0ED',
//         borderColor: '#880000'
//       }
//     ]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     color: '#880000'
//   }
// });




const canva = document.getElementById('ManuGrafico');

const dados = {
    data_inicio: ['20/02/2022', '30/01/2022', '02/05/2022', '25/09/2022', '30/06/2022', '12/01/2023'],
    valor_gasto: [1200, 900, 2300, 500, 200, 10300]
  }

    

Chart.defaults.font.size = 14;
Chart.defaults.color = '#000066'

new Chart(canva, {
    type: 'bar',
        data: {
            labels: dados.data_inicio,
            datasets: [{
                label: 'Gráfico Manutenção',
                data: dados.valor_gasto,
                borderWidth: 1,
                backgroundColor: '#C8E0ED',
                borderColor: '#058AA1'
            }]
        },
        options: {
            scales:{
                y:{
                        beginAtZero: true
                }
            },
            color: '#058AA1'
        }
    })


// fecth('http://localhost:3000/manu')
// .then(resp => resp.json())
// .then(data => {
//     const manutencao = data;
//     const tabela = document.getElementById('ManuGrafico');
//     for (let manu of manutencao){
//     const linha = document.createElement('tr');
//     const colunaData = document.createElement('td');
//     colunaData.textContent = manu.data_inicio;
//     const colunaPreco = document.createElement('td');
//     colunaPreco.textContent = manu.valor_gasto;
//     linha.appendChild(colunaData);
//     linha.appendChild(colunaPreco);
//     tabela.appendChild(linha)
//    }
// });



// const canva = document.getElementById('ManuGrafico');

// const ManuGrafico = new Chart(canva, {
//     type: 'bar',
//     data: {
//         labels: data.map(item => item.data_inicio),
//         datasets: [{
//             label: 'Gráfico Manutenção',
//             data: data.map(item => item.valor_gasto),
//             borderWidth: 1,
//             borderColor: '#880000'
//         }]
//     },
//     options: {
//         scales:{
//             y:{
//                     beginAtZero: true
//             }
//         },
//         color: '#880000'
//     }
// });

