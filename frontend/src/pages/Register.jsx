import { useState } from 'react'
import registerImg from '../images/register.png'

const Register = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  };
  
  return (
    <>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image">
              <img src={registerImg} alt="a girl is trying to do registration "
                height='500'
                width='500'
              />
            </div>

            {/* lets takle registration form */}

            <div className="registration-form">
              <h1 className="main-heading mb-3">registration form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">username</label>
                  <input
                    type="text "
                    name='username'
                    placeholder='username'
                    id='username'
                    required
                    autoComplete='off'
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email "
                    name='email'
                    placeholder=' Enter your email'
                    id='email'
                    required
                    autoComplete='off'
                    value={user.email}
                    onChange={handleInput}

                  />
                </div>

                <div>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="number"
                    name='phone'
                    placeholder='phone'
                    id='phone'
                    required
                    autoComplete='off'
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>

                <div>
                  <label htmlFor="password">password</label>
                  <input
                    type="text "
                    name='password'
                    placeholder='password'
                    id='password'
                    required
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInput}

                  />
                </div>
                <br />

                <button type='submit' className='btn btn-submit'> Register Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Register