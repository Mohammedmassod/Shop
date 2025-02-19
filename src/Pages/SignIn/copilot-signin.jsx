import React, { useState } from "react";
import Layout from "@/Components/Layout";

function SignIn({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("إسم المستخدم: ", username);
  console.log("كلمة المرور: ", password);

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <Layout>
      <div className="relative mb-4 flex items-center justify-center">
        <h1 className="text-md font-medium sm:text-xl">تسجيل دخول</h1>
      </div>
      <form
        onSubmit={handleLogin}
        className="flex h-screen w-screen flex-col items-center justify-center gap-5"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="إسم المستخدم"
          className="rounded-md border border-gray-300 px-2 py-1"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="كلمة المرور"
          className="rounded-md border border-gray-300 px-2 py-1"
        />
        <button
          type="submit"
          className="mt-2 w-48 rounded-lg bg-black py-2 font-medium text-white transition duration-300 hover:bg-gray-900/50"
        >
          تسجيل الدخول
        </button>
      </form>
    </Layout>
  );
}

export default SignIn;
