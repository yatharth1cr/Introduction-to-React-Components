let input = document.querySelector("input");
let rootElm = document.querySelector("ul");

// data
let allMovies = [];

// addEventListener on input
input.addEventListener("keyup", (event) => {
  //   console.log(event.keyCode);
  if (event.keyCode === 13 && event.target.value != "") {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    // console.log(allMovies);
    event.target.value = "";
    createUI(allMovies, rootElm);
  }
});

// createElement function
function createElement(type, attribute = {}) {
  var element = document.createElement(type);
  for (let key in attribute) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attribute[key]);
    } else if (key.startsWith("on")) {
      element.addEventListener("click");
    }
  }
  return element;
}

// createUI function
function createUI(data, root) {
  root.innerHTML = "";
  data.forEach((movie, i) => {
    var li = createElement("li", {
      innerText: movie.name,
    });
    // li.innerText = movie.name;

    var btn = createElement("button");
    btn.id = i;
    btn.innerText = movie.watched ? "Watched" : "To watch";

    li.append(btn);
    root.append(li);

    btn.addEventListener("click", (event) => {
      let id = event.target.id;
      allMovies[id].watched = !allMovies[id].watched;
      createUI(allMovies, rootElm);
    });
  });
}
