export default function setupCounter(element) {
  let counter = 0;
  const setCounter = count => {
    counter = count;
    // eslint-disable-next-line no-param-reassign
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
