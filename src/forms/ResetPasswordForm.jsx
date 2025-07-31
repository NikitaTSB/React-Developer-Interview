import React from 'react'

export function ResetPasswordForm() {
  return (
    <form className="space-y-4 border p-4 rounded-md max-w-md">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        type="email"
      />
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Reset
      </button>
    </form>
  )
}