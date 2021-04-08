const API = ' https://rickandmortyapi.com/api/character/'

const getData = async (id) => {
  
  const apiUrl = id ? `${API}${id}` : API

  try {

    const response = await fetch(apiUrl)

    const data = response.json()

    return data

  }catch(err){
    throw new Error(`Fetch Error: ${err}`)
  }

}

export default getData