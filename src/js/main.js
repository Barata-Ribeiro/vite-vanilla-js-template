import 'the-new-css-reset/css/reset.css';
import '../styles/style.css';

import viteLogo from '../assets/images/vite.svg';
import javascriptLogo from '../assets/images/javascript.svg';
import heroImg from '../assets/images/hero.png';

const dependencies = [
  'ESlint',
  'Prettier',
  'PostCSS',
  'PostCSS Nesting',
  'Autoprefixer',
  'CSS Nano',
  'CSS Reset',
];

document.querySelector('#app').innerHTML = `
  <div>
    <div id="center">
      <a class="hero" href="https://vitejs.dev" target="_blank">
        <img src="${heroImg}" class="base" width="170" height="179">
        <img src="${javascriptLogo}" class="framework" alt="JavaScript logo"/>
        <img src="${viteLogo}" class="vite" alt="Vite logo" />
      </a>
    </div>

    <h1>Vanilla Vite!</h1>
    <h2>Template by <cite><a class="author" href="https://github.com/Barata-Ribeiro" target="_blank" rel="noopener noreferrer">Barata-Ribeiro</a></cite></h2>
    
    <div class="card">
      <button id="counter" type="button"></button>
      <a class="gitRepo" href="https://github.com/Barata-Ribeiro/vite-vanilla-js-template" target="_blank" rel="noopener noreferrer">Repository</a>
    </div>
    
    <div class="tags">
    </div>

    <p class="read-the-docs">
      Click on the Vite logo to learn more about Vite.js.
    </p>
  </div>
`;

const setupCounter = (element) => {
  let counter = 0;
  const counterElement = element;
  const setCounter = (count) => {
    counter = count;
    counterElement.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
};

setupCounter(document.querySelector('#counter'));

document.querySelector('.tags').innerHTML = dependencies
  .map((dependency) => `<p>${dependency}</p>`)
  .join('');
