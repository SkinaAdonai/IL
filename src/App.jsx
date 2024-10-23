import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      const targetId = event.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        event.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('nav ul li a');
    links.forEach((link) => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <img src="src/assets/profil.jpg" className="foto" />
        <div>
          <div className="helo">Hello, </div>
          <div className="nama">I'm Skina Adonai</div>
          <div className="deskripsi">Web Developer || UI/UX Designer</div>
          <div className="deskripsi">2 Year's Experience</div>
          <br />
          <br />
          <a href="#contact" className="button">
            Let's Talk
          </a>
        </div>
      </section>
      <br />

      {/* About */}
      <section id="about">
        <h1 className="helo">About Me</h1>
        <p className="deskripsi">
          Saya adalah mahasiswa jurusan teknik informatika di salah satu kampus
          dimalang, saya memiliki hobi bermain musik contohnya gitar, bass,
          drum, dan keyboard. Tetapi saya lebih suka bermain keyboard
        </p>
        <div className="about">
          <div className="column">
            Web Development
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
              quasi, mollitia ab nisi esse suscipit at quis, voluptates adipisci
              maxime provident numquam tenetur similique perspiciatis minima
              impedit voluptate iste ad saepe voluptatum nostrum cupiditate.
              Asperiores facere aut amet iusto accusantium, odit voluptas
              quisquam vel eum numquam dolore rem itaque perspiciatis!
            </p>
          </div>

          <div className="column">
            UI / UX Designer
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              iste officiis voluptates necessitatibus cumque labore eveniet!
              Tenetur accusantium eius voluptatibus quibusdam cum. Voluptas illo
              minus corrupti dolorum eaque assumenda officia aut cumque rerum
              autem aspernatur magnam reprehenderit sapiente eveniet quibusdam
              qui error at facere, obcaecati repellendus, delectus inventore
              esse. Mollitia.
            </p>
          </div>
        </div>
      </section>
      <br />

      {/* Contact */}
      <section id="contact">
        <div className="contact">
          <h1>Contact Me</h1>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section><br />

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>Hi, I'm Skina Adonai, a web developer passionate about creating dynamic and user-friendly applications.</p>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <nav className="social-links">
              <a href="https://www.instagram.com/skina.adonai_/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://github.com/SkinaAdonai" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/skina-adonai/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </nav>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <nav className="resource-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Skina Adonai. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
