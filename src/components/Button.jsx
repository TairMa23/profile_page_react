import "./Button.css";

function Button({ type }) {
  return (
    <button className={`profile-button ${type.toLowerCase()}`}>
      {type}
    </button>
  );
}

export default Button;