// eslint-disable-next-line import/no-extraneous-dependencies
import "the-new-css-reset/css/reset.css";
import "../styles/style.css";
import javascriptLogo from "../../public/assets/images/javascript.svg";
import viteLogo from "../../public/assets/images/vite.svg";
import setupCounter from "./counter";

const dependencies = [
  "ESlint",
  "Prettier",
  "PostCSS",
  "Autoprefixer",
  "CSS Reset",
];

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Vanilla Vite!</h1>
    <h2>Template by <cite><a href="https://github.com/Barata-Ribeiro" target="_blank" rel="noopener noreferrer">Barata-Ribeiro</a></cite></h2>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="gitRepo" type="button"></button>
    </div>
    <div class="tags">      
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more about Vite.js.
    </p>
  </div>
`;

document.querySelector(".tags").innerHTML = dependencies
  .map(dependency => `<p>${dependency}</p>`)
  .join("");

document.querySelector(
  "#gitRepo"
).innerHTML = `<a href="https://github.com/Barata-Ribeiro/vite-vanilla-js-template" target="_blank" rel="noopener noreferrer">Repository</a>`;

setupCounter(document.querySelector("#counter"));
