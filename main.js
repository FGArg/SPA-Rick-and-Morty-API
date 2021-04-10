(()=>{"use strict";const a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",n=" https://rickandmortyapi.com/api/character/",t=async a=>{const t=a?`${n}${a}`:n;try{return(await fetch(t)).json()}catch(a){throw new Error(`Fetch Error: ${a}`)}},e=a=>"/"===a?a:a.length<=3?"/:id":a.includes("page")?"/:pages":`${a}`,s=async()=>{const n=await a(),e=await t(n);return`\n  <div class="Characters">\n\n  ${(await e.results.sort((()=>Math.random()-.5))).map((a=>`\n    <article class="Character-item">\n      <a href="#/${a.id}/">\n        <img src="${a.image}" alt="${a.name}"/>\n        <div class="Character-item-tag">\n        <h2>${a.name}</h2>\n        </div>\n      </a>\n    </article>\n\n    `)).join("")}\n    \n    </div>\n\n  `},o=()=>'\n  <div class="notfound-wrapper">\n        <div class="space-wrapper">\n          <div class="img-wrapper">\n            <span>44</span>\n          </div>\n          <p>The page you are trying to search has been <br> moved to another universe.</p>\n          <a href="https://fgarg.github.io/SPA-Rick-and-Morty-API/"><button class="simple-button" type="button">Take me back!</button></a>\n        </div>\n  </div>\n  \n\n  ',r={"/":s,"/:id":async()=>{const n=await a(),e=await t(n);return`\n\n  <div class="Characters-inner">\n      <article class="Characters-card">\n          <img src="${e.image}" alt="${e.name}">\n          <div class="Character-item-tag">\n          <h2>${e.name}</h2>\n          </div>\n      </article>\n          <article class="Characters-card Characters-details">\n            <h3>Episode: <span>${e.episode.length}</span></h3>\n            <h3>Status: <span>${e.status}</span></h3>\n            <h3>Species: <span>${e.species}</span></h3>\n            <h3>Gender: <span>${e.gender}</span></h3>\n            <h3>Origin: <span>${e.origin.name}</span></h3>\n            <h3>Last Location: <span>${e.location.name}</span></h3>\n            <a href="https://fgarg.github.io/SPA-Rick-and-Morty-API/"><button class="simple-button" type="button">Back to home</button></a>\n      </article>\n\n  </div>\n\n  `},"/:pages":s},c=async()=>{const n=document.getElementById("header"),s=document.getElementById("content"),c=document.getElementById("footer");n.innerHTML=await'\n  \n  <div class="Header-main">\n      <div class="Header-logo">\n          <h1>\n              <a href="https://fgarg.github.io/SPA-Rick-and-Morty-API/">\n                  <img src="assets/images/logo.png" alt="Rick & Morty API">\n              </a>\n          </h1>\n      </div>\n\n      <div class="Header-nav">\n        <a href="#/portal/">\n        <img class="header-portal" src="assets/images/portal.png" alt="Portal">\n        </a>\n      </div>\n  </div>\n\n  ';let i=a(),l=await e(i),p=r[l]?r[l]:o;s.innerHTML=await p(),c.innerHTML=await(async()=>{const n=await a(),s=await t(),o=await e(n);let r=[];for(let a=1;a<=s.info.pages;a++)r.push(a);const c=r.length,i="/:pages"===o?parseInt(n.split("=").pop()):"/";console.log(c),console.log(i);const l=((a,n,t)=>{switch(a){case"/":return`\n           <h4>Pages</h4>\n           <div class="Footer-pages">\n           <span class="footer-nav-button actual-page">1</span>\n           <a class="footer-nav-button" href="#/?page=2/">2</a>\n           <a class="footer-nav-button" href="#/?page=3/">3</a>\n           <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n           </div>`;case"/:id":return" ";case"/:pages":return 0===t||1===t?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <span class="footer-nav-button actual-page">1</span>\n                <a class="footer-nav-button" href="#/?page=2/">2</a>\n                <a class="footer-nav-button" href="#/?page=3/">3</a>\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n                </div>`:2===t?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>\n                <span class="footer-nav-button actual-page">${t}</span>\n                <a class="footer-nav-button" href="#/?page=${t+1}/">${t+1}</a>\n                <a class="footer-nav-button" href="#/?page=${t+2}/">${t+2}</a>\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n                </div>`:3===t?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>\n                <a class="footer-nav-button" href="#/?page=${t-1}/">${t-1}</a>\n                <span class="footer-nav-button actual-page">${t}</span>\n                <a class="footer-nav-button" href="#/?page=${t+1}/">${t+1}</a>\n                <a class="footer-nav-button" href="#/?page=${t+2}/">${t+2}</a>\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n                </div>`:t>3&&t<n-2?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>\n                <a class="footer-nav-button" href="#/?page=${t-2}/">${t-2}</a>\n                <a class="footer-nav-button" href="#/?page=${t-1}/">${t-1}</a>\n                <span class="footer-nav-button actual-page">${t}</span>\n                <a class="footer-nav-button" href="#/?page=${t+1}/">${t+1}</a>\n                <a class="footer-nav-button" href="#/?page=${t+2}/">${t+2}</a>\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n                </div>`:t===n-2?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>\n                <a class="footer-nav-button" href="#/?page=${t-2}/">${t-2}</a>\n                <a class="footer-nav-button" href="#/?page=${t-1}/">${t-1}</a>\n                <span class="footer-nav-button actual-page">${t}</span>\n                <a class="footer-nav-button" href="#/?page=${t+1}/">${t+1}</a>\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n                </div>`:t===n-1?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>\n                <a class="footer-nav-button" href="#/?page=${t-2}/">${t-2}</a>\n                <a class="footer-nav-button" href="#/?page=${t-1}/">${t-1}</a>\n                <span class="footer-nav-button actual-page">${t}</span>\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=${n}/">${n}</a>\n                </div>`:t===n?`\n                <h4>Pages</h4>\n                <div class="Footer-pages">\n                <a class="footer-nav-button footer-nav-limit" href="#/?page=1/">1</a>\n                <a class="footer-nav-button" href="#/?page=${t-2}/">${t-2}</a>\n                <a class="footer-nav-button" href="#/?page=${t-1}/">${t-1}</a>\n                <span class="footer-nav-button actual-page">${n}</span>\n                </div>`:""}})(o,c,i);return console.log(l),l})()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();