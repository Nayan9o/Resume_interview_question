import React from 'react'

const Login = () => {
  return (
    <main>
      <div className="form-contener">
        <h1>Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter email address' id='email' name='email' />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter password ' id='password' name='password' />
          </div>
          <button className='button primary-button'> Login </button>
        </form>
      </div>
    </main>
  )
}

export default Login
