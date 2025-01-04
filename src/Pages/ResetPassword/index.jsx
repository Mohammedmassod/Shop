import React, { useState } from "react";
import Layout from "@/Components/Layout";

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    console.log("Reset password request for:", email);
    // هنا يمكن إضافة استدعاء API لإرسال رابط استعادة كلمة المرور
  };

  return (
    <Layout>
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
        <div className="w-full max-w-lg rounded-lg bg-gradient-to-br from-white to-purple-50 p-10 shadow-xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
            استعادة كلمة المرور
          </h2>
          <p className="mb-8 text-center text-sm text-gray-600">
            أدخل بريدك الإلكتروني أو اسم المستخدم لإرسال رابط استعادة كلمة المرور.
          </p>
          <form onSubmit={handleReset} className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="البريد الإلكتروني أو اسم المستخدم"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-500 py-3 font-semibold text-white transition duration-300 hover:bg-purple-600"
            >
              إرسال رابط الاستعادة
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              تذكرت كلمة المرور؟{" "}
              <a href="/sign-in" className="text-purple-500 hover:underline">
                تسجيل الدخول
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ResetPassword;
