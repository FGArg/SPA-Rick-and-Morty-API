const resolveRoutes = (hash) => {


  if (hash === '/'){
    return hash
  }else if (hash.length <= 3){
    return '/:id'
  }else if (hash.includes('page')){
    return '/:pages'
  }

  return `${hash}`
}

export default resolveRoutes
