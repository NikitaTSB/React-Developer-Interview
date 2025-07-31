import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { LoginForm } from './forms/LoginForm'
import { SignupForm } from './forms/SignupForm'
import { ResetPasswordForm } from './forms/ResetPasswordForm'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="p-8 space-y-6">
      <LoginForm />
      <SignupForm />
      <ResetPasswordForm />
    </div>
  </React.StrictMode>
)