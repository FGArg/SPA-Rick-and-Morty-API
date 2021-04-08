const Header = () => {
  const view = `
  
  <div class="Header-main">
      <div class="Header-logo">
          <h1>
              <a href="/">
                  <img src="assets/images/logo.png" alt="Rick & Morty API">
              </a>
          </h1>
      </div>

      <div class="Header-nav">
        <a href="#/portal/">
        <img class="header-portal" src="assets/images/portal.png" alt="Portal">
        </a>
      </div>
  </div>

  `

  return view
}

export default Header