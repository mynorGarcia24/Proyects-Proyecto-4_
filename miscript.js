const apiBoton=document.getElementById("BontoApi");
const contendeorPokemon=document.getElementById("contenedor-principal");

function hola()
{
  alert("hola desde evento click");

}

function listarPokemon(NumPokemon){
    for(let i=1;i<=NumPokemon;i++)
    {
        let aleatorio=Math.floor(Math.random()*150);
        llamarAPI(aleatorio);
    }

}

function llamarAPI(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(rest=>rest.json())
    .then(data=>{
        crearTarjetaPokemon(data);
    });
}

function crearTarjetaPokemon(pokemon)
{
    const tarjeta=document.createElement("div");
    tarjeta.classList.add("pokemon-block");

    const sprintecontainer=document.createElement("div");
    sprintecontainer.classList.add("img-container");

    const sprite=document.createElement("img");
    sprite.src=pokemon.sprites.front_default;
    sprintecontainer.appendChild(sprite);

    const name=document.createElement("p");
    name.classList.add("name");
    name.textContent=pokemon.name;

    tarjeta.appendChild(sprintecontainer);
    tarjeta.appendChild(name);
    contendeorPokemon.appendChild(tarjeta);
}

apiBoton.addEventListener("click",listarPokemon(6));