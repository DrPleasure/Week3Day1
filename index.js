function changeH1Text() {
  document.querySelector("h1").innerText = "Changed!";
}

function changeBackGroundColor() {
  document.querySelector("body").style.backgroundColor = "green";
}

function changeAddress() {
  document.querySelector("footer").innerHTML = "FAKE PLACE NO BUENO";
}

function addClassToLink() {
  document.querySelector("a").classList.add("giant-font");
}

function toggleImagesClass() {
  for (let image of document.querySelectorAll("img")) {
    image.classList.toggle("hidden");
  }
}

function colorProduct() {
  const color = getRandomColor();
  for (let price of document.querySelectorAll("tr > td:nth-child(3)")) {
    price.style.color = color;
  }
}

function getRandomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
