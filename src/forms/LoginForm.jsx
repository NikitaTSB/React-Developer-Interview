import React from 'react'

export function LoginForm() {
  return (
    <form className="space-y-4 border p-4 rounded-md max-w-md">
      <h2 className="text-xl font-bold">Login</h2>
      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        type="email"
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Password"
        type="password"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  )
}