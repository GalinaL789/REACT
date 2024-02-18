import React from 'react';
import './styles.css'; // Импортируем стили непосредственно в файле
import Input from "../../components/Input/Input";
import Button from '../../components/Button/Button';
import {LogIn, Pwd} from './data'; 

function LoginForm() {
  return (<div className="login-form">
    <Input info={LogIn}/>
    <Input info={Pwd}/>
    <Button/>
  </div> 
  );
}

export default LoginForm;