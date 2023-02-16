const PokeName = document.querySelector('poke-name');
const PokeNumber = document.querySelector('poke-number');
const PokeImage = document.querySelector('poke-img');

const PokeInfo = document.querySelector('poke-info');
const PokeLista = document.getElementById('poke-list');
const poke_cont = 905;

const PokeForm = document.querySelector('');
const PokeInp = document.querySelector('');

const colors = {
    fire:  '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water:  '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy:  '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon:  '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting:  '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPoke = async () => {
    for(let i = 1; i <= poke_cont; i++) {
        await getPoke(i)
    }
}

const getPoke = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokeCard(data)
}

const createPokeCard = (poke) => {
    const pokeEl = document.createElement('div')
    pokeEl.classList.add('poke')

const name = poke.name[0].toUpperCase() + poke.name.slice(1)
const id = poke.id.toString().padStart(3,'0')
const pokeType = poke.types.map(type => type.type.name)
const type = main_types.find (type => pokeType.indexOf(type) > -1)
const color = colors[type]

pokeEl.style.backgroundColor = color


    const pokeInnerHTML = `
    <div class ="img-container">
    <img src="" alt="">
    </div>
    <div class"info">
    <span> class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span> </small>
    </div>
    `

    pokeEl.innerHTML = pokeInnerHTML

    PokeLista.appendChild(pokeEl)
}

fetchPoke()