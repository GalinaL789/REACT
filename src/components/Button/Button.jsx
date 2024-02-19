import "./styles.css";
import "./data";
function Button({label,type}) {
    return <button className="button" type={`${type}`}>{`${label}`}</button>;
  }
  export default Button;