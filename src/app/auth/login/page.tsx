"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = (e: any) => {
    e.preventDefault();
    
  };

  return (
    <div className="w-full bg-gray-200 flex justify-center items-center p-4 flex flex-col absolute top-0 bottom-0">
      <form
        onSubmit={doLogin}
        className="bg-white w-[300px] rounded-md shadow-md shadow-purple-300"
      >
        <h1 className="text-center text-3xl p-8 bg-teal-500 text-white font-bold rounded-tl-md rounded-tr-md">
          Conta tudo
        </h1>

        <div className="p-4 flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Seu email"
            className="px-2 border border-mauve8 rounded-sm h-[35px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="px-4 flex flex-col gap-2">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Sua senha"
            className="px-2 border border-mauve8 rounded-sm h-[35px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={!email || !password}
          className={`bg-teal-500 text-white p-2 rounded-sm w-full mt-16 disabled:bg-gray-200 disabled:text-gray-400`}
        >
          Logar-se
        </button>
      </form>
    </div>
  );
}
