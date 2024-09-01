function ClickTwo() {
  return (
    <button
      onClick={() => {
        alert(`To learn React use https://reactjs.org`);
        alert(`React and ReactDOM works together`);
        alert(`Babel helps in writing JSX`);
      }}
    >
      How Can I Help You?
    </button>
  );
}

export default ClickTwo;
