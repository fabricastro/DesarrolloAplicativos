import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handlePassword = (Event) => {
    setPassword(Event.target.value);
  };
  const handleName = (Event) => {
    setName(Event.target.value);
  };
  const handleButton = (event) => {
    event.preventDefault();
    window.location.href = "/Home";
    console.log(name);
    console.log(password);
  };

  return (
    <form onSubmit={handleButton}>
      <label>
        Nombre de Usuario
        <input required value={name} onChange={handleName} />
      </label>
      <label>
        Contraseña
        <input required value={password} onChange={handlePassword} />
      </label>
      <button type="submit">Hola</button>
      <br />
      <Link to="/home">ir a home</Link>
    </form>
  );
};
