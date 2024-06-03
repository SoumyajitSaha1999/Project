const colorCodeContainer = document.getElementById("color-code");
const optionContainer = document.getElementById("option-container");
let randomColor = null;

function generateNumberBetween(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
  const red = generateNumberBetween(0, 255);
  const green = generateNumberBetween(0, 255);
  const blue = generateNumberBetween(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

function startGame() {
  randomColor = generateRandomColorRGB();
  colorCodeContainer.innerText = randomColor;

  const ansIndex = generateNumberBetween(0,5)

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = 
    i === ansIndex ? randomColor : generateRandomColorRGB();
    optionContainer.append(div)
  }
}

window.addEventListener("load", () => startGame());

console.log(generateRandomColorRGB());
