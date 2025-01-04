import React, { useState } from "react";
import Layout from "@/Components/Layout";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    const { username, email, password, confirmPassword } = formData;

    // التحقق من كلمة المرور
    if (password !== confirmPassword) {
      alert("كلمات المرور غير متطابقة");
      return;
    }

    // إجراء تسجيل الحساب
    console.log("بيانات التسجيل:", formData);
  };

  return (
    <Layout>
      <div className="flex h-screen items-center justify-center bg-gradient-to-br ">
        <div className="w-full max-w-lg rounded-lg bg-gradient-to-br from-white to-blue-300 p-10 shadow-xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            إنشاء حساب جديد
          </h2>
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="اسم المستخدم"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="البريد الإلكتروني"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="كلمة المرور"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="تأكيد كلمة المرور"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-green-500 py-2 font-semibold text-white transition duration-300 hover:bg-green-600"
            >
              تسجيل حساب جديد
            </button>
          </form>
          <div className="mt-4 text-center text-sm text-gray-600">
            <p>
              لديك حساب بالفعل؟{" "}
              <a href="/sign-in" className="text-blue-500 hover:underline">
                تسجيل الدخول
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
