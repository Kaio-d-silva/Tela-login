

import { useState } from "react"

export default function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await fetch("http://localhost:30001/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email: username, senha: password }),
      });

      const data = await response.json();
      console.log("Resposta do servidor:", data)

    } catch (error) {
      console.log(error)

    }
  };
  return (
    <div className="Login">
      <div className='ContainerLogin'>
        <div className='FormLogin'>
          <h2 className='TextLogin'><strong>Login</strong></h2>
          <label>Nome de usuario</label>
          <input
            type='text'
            id='name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Senha</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='Button' onClick={login}>Logar</button>
        </div>
      </div>
    </div>
  );
}