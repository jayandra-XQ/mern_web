import { useState } from 'react';
import contactImage from '../images/network.png'
import { useAuth } from '../store/auth'

const defaultContactFormData =  {
  username: '',
  email: '',
  message: ''
}


const Contact = () => {

  const [contact, setContact] = useState(defaultContactFormData)

  const [userData, setUserData] = useState(true)

  const { user } = useAuth()

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: ""
    })

    setUserData(false)
  }





  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch ("http://localhost:5000/api/form/contact", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      });

      if(response.ok) {
        setContact(defaultContactFormData)
        alert('Message send successfully');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <section className="section-container">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>

        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-image">
            <img src={contactImage} alt="we are always ready to help"
              height='500px'
              width='500px'
            />
          </div>

          {/* contact form */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name='username'
                  id='usuername'
                  autoComplete='off'
                  value={contact.username}
                  onChange={handleInput}
                  required

                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name='email'
                  id='email'
                  autoComplete='off'
                  value={contact.email}
                  onChange={handleInput}
                  required

                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete='off'
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6">

                </textarea>
              </div>

              <button className='contact-button' type='submit'> Submit </button>
            </form>
          </section>
        </div>

        <section className='mb-3'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4758385354085!2d85.
          30448225231854!3d27.702590914968482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d68f8f328d%3A0x2e35952fdc141cd4!2sTamrakar
          %20House%2C%20New%20Road!5e0!3m2!1sen!2sin!4v1705426356358!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </section>
      </section>
    </>
  )
}

export default Contact