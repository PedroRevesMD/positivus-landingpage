import "../index.css"
export default function ContactUs() {
  return (
    <section>
      <h3>Contact Us</h3>
      <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      <div>
        <form action="">
          <fieldset>
            <label>
              <input type="radio" name="option" checked />
              Say Hi
            </label>
            <label>
              <input type="radio" name="option" />
              Get a Quote
            </label>
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
            <textarea className="resize-none" name="message" id="message" placeholder="Message" rows={6} cols={28} required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>

  )
}
