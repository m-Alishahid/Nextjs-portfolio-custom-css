import Footer from "./components/Footer";

const Home: React.FC = () => {
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

      <main>
        <section className="intro">
          <div className="intro-content">
            <img src="/developer.png" alt="Developer" className="developer-photo" />
            <div className="intro-text">
              <h2>Welcome to My Portfolio</h2>
              <p>I’m Muhammad Ali a frontend developer with experience in creating interactive web applications.expert in latest technologies </p>
            </div>
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-card">
              <img src="/cv.png" alt="Resume Builder App" className="project-image" />
              <h3>Resume Builder App</h3>
              <p>A dynamic app to create and update resumes easily.</p>
              <a href="#" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <img src="/inventory.png" alt="Inventory System" className="project-image" />
              <h3>Inventory System</h3>
              <p>A system to manage stock and inventory for businesses.</p>
              <a href="#" className="project-link">View Project</a>
            </div>
            <div className="project-card">
              <img src="/cal.png" alt="Calculator App" className="project-image" />
              <h3>Calculator App</h3>
              <p>A basic calculator app built for quick and easy calculations.</p>
              <a href="#" className="project-link">View Project</a>
            </div>
          </div>
        </section>


      </main>


      <Footer />


    </div>
  );
};

export default Home;