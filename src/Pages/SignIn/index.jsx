import React, { useState } from "react";
import Layout from "@/Components/Layout";
import { useAuth } from "@/Context/auth";

function SignIn() {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(username, password);
  };

  return (
    <Layout>
      <div className="flex h-screen items-center justify-center bg-gradient-to-br ">
        {/* تكبير مربع الفورم */}
        <div className="w-full max-w-lg rounded-lg bg-gradient-to-br from-white to-blue-300 p-10 shadow-xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">
            تسجيل الدخول
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="إسم المستخدم"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="كلمة المرور"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-blue-500 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
            >
              تسجيل الدخول
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              هل نسيت كلمة المرور؟{" "}
              <a
                href="/reset-password"
                className="text-blue-500 hover:underline"
              >
                استعادة كلمة المرور
              </a>
            </p>
            <p>
              ليس لديك حساب؟{" "}
              <a href="/sign-up" className="text-blue-500 hover:underline">
                إنشاء حساب جديد
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignIn;
