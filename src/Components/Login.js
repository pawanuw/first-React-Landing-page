import React from 'react';

const Login = () => {
  return (
    <div>
      <h1 className='login-heading'>Enter your name</h1>
      <form>
        <div>
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" name="username" />
        </div>
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}

export default Login;
