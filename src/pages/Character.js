import getHash from '../utils/getHash'
import getData from '../utils/getData'


const Character = async () => {
  
  const id = await getHash() 

  const character = await getData(id)
    
  const view = `

  <div class="Characters-inner">
      <article class="Characters-card">
          <img src="${character.image}" alt="${character.name}">
          <div class="Character-item-tag">
          <h2>${character.name}</h2>
          </div>
      </article>
          <article class="Characters-card Characters-details">
            <h3>Episode: <span>${character.episode.length}</span></h3>
            <h3>Status: <span>${character.status}</span></h3>
            <h3>Species: <span>${character.species}</span></h3>
            <h3>Gender: <span>${character.gender}</span></h3>
            <h3>Origin: <span>${character.origin.name}</span></h3>
            <h3>Last Location: <span>${character.location.name}</span></h3>
            <a href="/"><button class="simple-button" type="button">Back to home</button></a>
      </article>

  </div>

  `

  return view
}

export default Character