fetch('https://pokeapi.co/api/v2/pokemon/6').then(result =>{
    return result.json();
}).then(data2 => {
    console.log(data2);
    document.querySelector("#card2").innerHTML= `
   
        <h1>${ data2.name } # ${data2.id}</h1>
        <div class="card-pic">
        <img class="pkmnPic" src="${ data2.sprites.front_default }">
        <img class="pkmnPic" src="${ data2.sprites.back_default }">
        <img class="pkmnPic" src="${ data2.sprites.front_shiny }">
        </div>
    `

}).catch(err => {
    console.log(err)
})

fetch('https://pokeapi.co/api/v2/pokemon/6').then(result =>{
    return result.json();
}).then(data2 => {
    console.log(data2);
    document.querySelector("#info").innerHTML= `
   
    
        <h3 class="sub-head">Type</h3>
        <div class="type2">
        <p class="fire1">${ data2.types[0].type.name }/${ data2.types[1].type.name }</p>
        
        
        <h3 class="sub-head">Moves</h3>
        <ul>
        <li>${ data2.moves[1].move.name }</li>
        <li>${ data2.moves[21].move.name }</li>
        <li>${ data2.moves[7].move.name }</li>
        <li>${ data2.moves[100].move.name }</li>
        
        </ul>

        <h3 class="sub-head">The cry of charizard</h3>
        <iframe width="110" height="100" src="https://www.myinstants.com/instant/charizard-73796/embed/" frameborder="0" scrolling="no"></iframe>
        <br>

        <h3 class="sub-head">Stats</h3>
        <p>${data2.stats[0].stat.name} : ${data2.stats[0].base_stat}</p>
        <p>${data2.stats[1].stat.name} : ${data2.stats[1].base_stat}</p>
        <p>${data2.stats[2].stat.name} : ${data2.stats[2].base_stat}</p>
        <p>${data2.stats[3].stat.name} : ${data2.stats[3].base_stat}</p>
        <p>${data2.stats[4].stat.name} : ${data2.stats[4].base_stat}</p>
        <p>${data2.stats[5].stat.name} : ${data2.stats[5].base_stat}</p>

        <h3 class="sub-head">Weight</h3>
        <p>${data2.weight/10} KG</p>
        <h3 class="sub-head">Ability</h3>
        <p>${data2.abilities[0].ability.name}/${data2.abilities[1].ability.name}</p>

    `

}).catch(err => {
    console.log(err)
})