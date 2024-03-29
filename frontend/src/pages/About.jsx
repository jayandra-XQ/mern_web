import Analytics from '../components/Analytics'
import aboutImage from '../images/about.png'
import {useAuth } from '../store/auth'

const About = () => {

  const {user } = useAuth()
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>welcome,  {user ? `${user.username} to our website`: `to our website`  }</p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who are
                passionate about staying up-to-date with the latest industry trends.

                <br /><br />

                Customization:  We understand that every business is unique. That's why
                we create solution that are tailored to your specific needs and goals

                <br /><br />

                Customer-centric Approach We priotrize your satifaction and provide
                top notch support to address your IT concerns.

                <br /><br />

                Affordability: We offer competitive pricing without compromising on the quality of
                our services.

                <br /><br />

                Relibility: Count on us to be there when you need us . We're committed to
                ensuring your IT environment is reliable and available 24/7

              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src={aboutImage}
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  )
}

export default About