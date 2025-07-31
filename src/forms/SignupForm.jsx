import React from 'react'

export function SignupForm() {
  return (
    <form className="space-y-4 border p-4 rounded-md max-w-md">
      <h2 className="text-xl font-bold">Sign Up</h2>
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
      <input
        className="w-full border p-2 rounded"
        placeholder="Confirm Password"
        type="password"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </form>
  )
}