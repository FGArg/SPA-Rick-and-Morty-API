const resolveRoutes = (hash) => {
  console.log(`hash: ${hash}`)

  if(hash.length <= 3) {
    let validHash = hash === '/' ? hash : '/:id'
    
    return validHash
  }

  return `${hash}`
}

export default resolveRoutes
