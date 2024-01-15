import { useState } from 'react'
import loginImg from '../images/login.png'

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleLogin = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })
    
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
  }



  return (
    <>
      <main>
        <div className="section-login">
          <div className="container grid grid-two-cols">
            <div className="login-image">
              <img src={loginImg} alt="a girl try to login " 
              height='500px'
              width='500px'
              />
            </div>

            {/* lets tackle the login form */}

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">email</label>
                <input 
                type="email"
                name="email"
                placeholder='Enter Your Email' 
                id='email'
                required
                autoComplete='off'
                value={user.email}
                onChange={handleLogin}
                
                />
              </div>

              <div>
                <label htmlFor="password">password</label>
                <input 
                type="password"
                name='password'
                placeholder='Enter Your Password'
                id='password'
                required
                autoComplete='off' 
                value={user.password}
                onChange={handleLogin}
                
                />
              </div>

              <button type='submit' >Login </button>
            </form>

          </div>
        </div>
      </main>
    </>
  )
}

export default Login