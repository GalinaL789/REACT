// import "./styles.css";
// import "./data";
// function Button({label,type}) {
//     return <button className="button" type={`${type}`}>{`${label}`}</button>;
//   }
//   export default Button;

import './styles.css'

function Button({ name, type = "button", onClick = () => {} }) {
  return (
    <button className="button-component" onClick={onClick} type={type}>
      {name}
    </button>
  );
}

export default Button;