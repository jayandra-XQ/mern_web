import { useState } from 'react'
import loginImg from '../images/login.png'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth'

const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const {storeTokenInLS} = useAuth()

  const handleLogin = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if(response.ok) {

        const res_data = await response.json();

        storeTokenInLS(res_data.token)
        
        setUser({
          email: '',
          password: '',
        })
        navigate('/');
  } else {
    alert('invalid credentials')
  }


    } catch (error) {
      console.log(error)
    }
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