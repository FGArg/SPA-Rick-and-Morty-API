import getData from '../utils/getData'

const Home = async () => {
  
  const characters = await getData()

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