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
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img src={loginImg}
                  alt="a girl try to login "
                  height='500px'
                  width='500px'
                />
              </div>

              <div className='registration-form'>
                <h1 className="main-heading mb-3">Login form</h1>

                <br />


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
          </div>
        </main>
      </section>
    </>
  )
}

export default Login