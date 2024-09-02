import colors from "../data/colors";

function Color() {
  return (
    <>
      {Object.keys(colors).map((key) => (
        <div className="color-parent flex">
          <div className="color-key">
            <h2>{key}</h2>
            <span className="color-key">colors.{key}</span>
          </div>
          <ul className="flex">
            {colors[key].map((clr, i) => {
              return (
                <li>
                  <div
                    className="color-box"
                    style={{ backgroundColor: clr }}
                  ></div>
                  <div className="flex color-info">
                    <span>{i === 0 ? 50 : 100}</span>
                    <span className="color-code">{clr}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Color;
