fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    //de JSON a dato manipulable (objeto o array)
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-personajes");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${personajes[i].image}" class="character-image"> 
        <p class="nombre-personaje"> Nombre: ${personajes[i].name} </p>
        <p class="character-info"> Genero: ${personajes[i].gender} </p>
        <p class="character-info"> Especie: ${personajes[i].species} </p>
        <p class="character-info">  Estado: ${personajes[i].status}</p>
        </div>
      `;
    }
  });
