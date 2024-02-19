import "./styles.css"; // Импортируем стили непосредственно в файле
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { LogIn, Pwd } from "./data";
//import {label,type} from "../../components/Button/data";
function LoginForm() {
  return (
    // <div className="login-form">
      <form className="login-form">
        <h1>Login Form</h1>
      <Input jsonObject={LogIn} />
      <Input jsonObject={Pwd} />
    <Button label="Hello World" type="submit"/>
      </form>
    // </div>
  );
}

export default LoginForm;

