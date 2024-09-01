import Proptypes from "prop-types";

let allName = ["Arya", "John", "Bran"];

function HelloName() {
  return allName.map((name, i) => {
    return (
      <button
        key={i}
        onClick={() => {
          alert(`Hello ${name}`);
        }}
      >
        Hello {name}
      </button>
    );
  });
}

HelloName.proptypes = {
  name: Proptypes.string,
};
export default HelloName;
