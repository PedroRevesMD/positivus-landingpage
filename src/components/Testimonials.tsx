import "../index.css"
export default function Testimonials() {
  return (
    <section>
      <div>
        <h3>Testimonials</h3>
        <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>
      <div>
        <form action="">
          <fieldset>
            <input type="radio" />
            <input type="radio" />
          </fieldset>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required placeholder="Email" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
