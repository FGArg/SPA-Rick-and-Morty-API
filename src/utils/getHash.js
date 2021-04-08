const getHash = () => {
  console.log(`location.hash ${location.hash}`)
  console.log(`location.hash.slice(1) ${location.hash.slice(1)}`)
  console.log(`location.hash.slice(1).toLocaleLowerCase() ${location.hash.slice(1).toLocaleLowerCase()}`)
  console.log(`location.hash.slice(1).toLocaleLowerCase().split('/') ${location.hash.slice(1).toLocaleLowerCase().split('/')}`)
  console.log(`location.hash.slice(1).toLocaleLowerCase().split('/')[1] ${location.hash.slice(1).toLocaleLowerCase().split('/')[1]}`)

  return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash