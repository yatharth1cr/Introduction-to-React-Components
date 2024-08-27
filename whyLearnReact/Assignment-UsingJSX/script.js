var input = document.querySelector("input");
var rootElm = document.querySelector("ul");

let allMovies = [];

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && event.target.value !== "") {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createUI();
  }
});

// handleChange function
function handleChange(event) {
  let id = event.target.id;
  allMovies[id].watched = !allMovies[id].watched;
  createUI(allMovies, rootElm);
}

function createUI(data = allMovies, root = rootElm) {
  let ui = data.map((movie, i) => {
    // let li = React.createElement(
    //   "li",
    //   { key: i },
    //   movie.name,
    //   React.createElement("button", {
    //     id: i,
    //     children: movie.watched ? "Watched" : "To Watch",
    //     onClick: handleChange,
    //   })
    // );]

    return li;
  });

  let rootElement = ReactDOM.createRoot(root);
  rootElement.render(ui);
}
