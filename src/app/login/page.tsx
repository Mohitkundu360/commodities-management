"use client";

export default function LoginPage() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      {/* Replace with your login form component */}
      <form className="space-y-4">
        <input type="text" placeholder="Username" className="w-full p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Log In</button>
      </form>
    </main>
  );
}