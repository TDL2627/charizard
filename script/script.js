fetch('https://pokeapi.co/api/v2/pokemon/6').then(result =>{
    return result.json();
}).then(data2 => {
    console.log(data2);
    document.querySelector("#card2").innerHTML= `
   
        <h1>${ data2.name }</h1>
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
        <p class="fire1">${ data2.types[0].type.name } </p>
        <p class="fly">${ data2.types[1].type.name }</p>
        
        <h3 class="sub-head">Moves</h3>
        <ul>
        <li>${ data2.moves[5].move.name }</li>
        <li>${ data2.moves[21].move.name }</li>
        <li>${ data2.moves[7].move.name }</li>
        <li>${ data2.moves[8].move.name }</li>
        
        </ul>
        <br>

    `

}).catch(err => {
    console.log(err)
})