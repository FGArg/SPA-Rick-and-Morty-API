import getData from '../utils/getData'
import getHash from '../utils/getHash'

const Home = async () => {
  
  const page = await getHash();
  const characters = await getData(page);

  const shuffledCharacters = await characters.results.sort( () => Math.random() - 0.5 )

  const view = `
  <div class="Characters">

  ${shuffledCharacters.map(character => 
    `
    <article class="Character-item">
      <a href="#/${character.id}/">
        <img src="${character.image}" alt="${character.name}"/>
        <div class="Character-item-tag">
        <h2>${character.name}</h2>
        </div>
      </a>
    </article>

    `
    ).join('')}
    
    </div>

  `

  return view
}

export default Home