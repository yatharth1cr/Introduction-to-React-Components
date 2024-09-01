import Proptypes from "prop-types";
import fruits from "../data/fruits";

function ClickFruits() {
  return fruits.map((el) => {
    return (
      <button
        key={el.id}
        onClick={() => {
          alert(`${el.value}`);
        }}
      >
        {el.value}
      </button>
    );
  });
}

ClickFruits.proptypes = {
  id: Proptypes.string,
  value: Proptypes.string,
};

export default ClickFruits;
