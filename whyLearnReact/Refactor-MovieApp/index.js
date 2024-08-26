let input = document.querySelector("input");
let rootElm = document.querySelector("ul");

// data
let allMovies = [];

// addEventListener on input
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && event.target.value != "") {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI(allMovies, rootElm);
  }
});

// handleChange function
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, rootElm);
}

// createUI function
function createUI(data, root) {
  root.innerHTML = "";
  let ui = data.forEach((movie, i) => {
    var li = React.createElement(
      "li",
      {
        innertext: movie.name,
      },
      React.createElement("button", {
        id: i,
        innerText: movie.watched ? "Watched" : "To watch",
        onclick: handleChange,
      })
    );
    return li;
  });
  ReactDOM.render(ui, root);
  // createRoot(root).render(ui);
}
