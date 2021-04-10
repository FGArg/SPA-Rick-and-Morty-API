const API = ' https://rickandmortyapi.com/api/character/'

const getData = async (hash) => {
  
  const apiUrl = hash ? `${API}${hash}` : API

  try {

    const response = await fetch(apiUrl)

    const data = response.json()

    return data

  }catch(err){
    throw new Error(`Fetch Error: ${err}`)
  }

}

export default getData