import Footer from "../components/Footer";

const Contact: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1 className="logo">My Portfolio</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="contact-section">
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to get in touch, feel free to contact me using the form below or through my social media links.</p>

        <form className="contact-form" method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Other Ways to Reach Me:</h3>
          <p>Email: your.email@example.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="socials">
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </main>


      <Footer />
    </div>
  );
};

export default Contact;