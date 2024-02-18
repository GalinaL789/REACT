import React from 'react';
import './styles.css'; // Импортируем стили непосредственно в файле

function Input({jsonObject}) {
  console.log(jsonObject);
  
  return <p>{`${jsonObject.label}`} <br/><input className="input" placeholder={`${jsonObject.placeholder}`} 
  
  type={`${jsonObject.type}`} /></p>;
  
}

export default Input;