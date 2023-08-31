import { useState } from "react";

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
      <div className="flex min-h-screen items-center justify-center bg-[#FD4556]">
        <div className="bg-blanco z-20 rounded-2xl px-12 py-12 shadow-xl">
          <div>
            <h1 className="mb-4 cursor-pointer text-center text-3xl font-bold">
              Iniciar Sesión
            </h1>
          </div>
          <form onSubmit={handleButton}>
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={handleName}
                placeholder="Nombre de Usuario"
                className="block w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
              <input
                type="password"
                onChange={handlePassword}
                value={password}
                placeholder="Contraseña"
                className="block w-full rounded-lg border px-4 py-3 text-sm outline-none"
              />
            </div>
            <p
              className="bg-secondary my-3 hidden w-full rounded-lg px-4 py-3 text-sm text-white"
              style={errorMessage ? { display: "block" } : { display: "none" }}
            >
              {errorMessage}
            </p>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-secondary w-64 rounded-2xl py-3 text-xl text-white"
              >
                Acceder
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
