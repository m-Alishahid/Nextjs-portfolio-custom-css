import Footer from "../components/Footer";

const About: React.FC = () => {
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

      <main className="about-section">
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer with a passion for building beautiful and functional web applications. My skills include HTML, CSS, JavaScript, and TypeScript. I love learning new technologies and continuously improving my craft.
        </p>

        <section className="skills-section">
          <h3>Skills</h3>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript & TypeScript</li>
            <li>React & Next.js</li>
            <li>Tailwind CSS</li>
            <li>Version Control (Git)</li>
            <li>Responsive Design</li>
          </ul>
        </section>

        <section className="experience-section">
          <h3>Experience</h3>
          <div className="experience-item">
            <h4>Frontend Developer</h4>
            <p>Company Name - Location</p>
            <p>June 2022 - Present</p>
            <p>
              Developed and maintained responsive web applications using React and Next.js.
              Collaborated with designers and backend developers to create seamless user experiences.
            </p>
          </div>
          <div className="experience-item">
            <h4>Intern Web Developer</h4>
            <p>Company Name - Location</p>
            <p>Jan 2021 - May 2022</p>
            <p>
              Assisted in the development of web applications and gained experience in HTML, CSS,
              and JavaScript. Participated in code reviews and contributed to team projects.
            </p>
          </div>
        </section>

        <section className="education-section">
          <h3>Education</h3>
          <div className="education-item">
            <h4>Bachelor of Science in Computer Science</h4>
            <p>University Name - Year of Graduation</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;