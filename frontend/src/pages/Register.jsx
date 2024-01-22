import { useState } from 'react'
import registerImg from '../images/register.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Register = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  })

  const {storeTokenInLS} = useAuth()

  const handleInput = (e) => {
    console.log(e)
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
      });
      console.log("response data :", response)

      if (response.ok) {
        const res_data = await response.json()

        //stored token in local storage
        storeTokenInLS(res_data.token)

        setUser({
          username: '',
          email: '',
          phone: '',
          password: ''
        })
        navigate('/login')
      }


    } catch (error) {
      console.log("registration", error)
    }


  };

  return (
    <>
      <section>
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
                      required
                      value={user.email}
                      onChange={handleInput}

                    />
                  </div>

                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name='phone'
                      
                      required
                      
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password "
                      name='password'
                      
                      required
                      
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
      </section>
    </>
  )
}

export default Register