import { useState } from "react";
import { ButtonPrimary } from "../buttons/ButtonPrimary";

export const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  /*   const [isLoggedIn, setIsLoggedIn] = useState(false); */

  const handlePassword = (Event) => {
    setPassword(Event.target.value);
  };
  const handleName = (Event) => {
    setName(Event.target.value);
  };
  const handleButton = (event) => {
    event.preventDefault();
    if (name === "admin" && password === "1234") {
      console.log(name);
      console.log(password);
      window.location.href = "/home";
      /* setIsLoggedIn(true); */
    } else {
      console.log(name);
      console.log(password);
      setErrorMessage("Por favor ingresa un valor correcto!");
    }
  };

  return (
    <>
      <div className="flex min-h-screen  items-center justify-center bg-secondary">
        <div className="z-20 rounded-2xl bg-blanco px-12 py-12 shadow-xl">
          <div>
            <h1 className="font-secondary mb-4 cursor-pointer text-center text-3xl font-bold text-primary">
              Iniciar Sesión
            </h1>
          </div>
          <form onSubmit={handleButton}>
            <div className="w-[350px] space-y-4">
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Nombre de Usuario"
                className="block w-full rounded-3xl border-[2px] border-primary bg-white px-4 py-3 text-medium text-oscuro outline-none"
              />
              <input
                type="password"
                onChange={handlePassword}
                value={password}
                placeholder="Contraseña"
                className="block w-full rounded-3xl border-[2px] border-primary bg-white px-4 py-3 text-medium text-oscuro outline-none"
              />
            </div>
            <p
              className="my-3 hidden w-full animate-appearance-in rounded-3xl bg-secondary px-4 py-3 text-center text-medium text-white"
              style={errorMessage ? { display: "block" } : { display: "none" }}
            >
              {errorMessage}
            </p>
            <div className="mt-6 text-center">
              <ButtonPrimary buttonName="Acceder"></ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
