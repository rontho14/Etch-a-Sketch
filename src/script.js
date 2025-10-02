const container = document.querySelector("#grid-container");

function randomColor() {
    let randomNumber1 = Math.floor(Math.random() * 256);
    let randomNumber2 = Math.floor(Math.random() * 256);
    let randomNumber3 = Math.floor(Math.random() * 256);
    let color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
    return color;
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
  container.innerHTML = "";
  squareSize = prompt("Select how many squares per side in new Grid");
  if (squareSize > 100) {
    alert("Please use a number less than 100");
    squareSize = 16;
  } else if (squareSize <= 0) {
    alert("Please use a number larger than 0");
    squareSize = 16;
  }

  for (let i = 0; i < squareSize; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    column.style.display = "flex";
    column.style.flexGrow = "1";
    container.appendChild(column);

    for (let j = 0; j < squareSize; j++) {
      let square = document.createElement("div");
      square.dataset.darknessLevel = 0;
      square.classList.add("square");
      square.style.display = "flex";
      square.style.flexGrow = "1";
      square.style.border = "1px solid black";
      column.appendChild(square);

      square.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = randomColor();
        setTimeout(() => {
          event.target.style.backgroundColor = "";
        }, 1000);
      });
    }
  }
});
