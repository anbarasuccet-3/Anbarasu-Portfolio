import React, { useRef, useEffect } from 'react';
import './App.css';
import html from './assets/html.jpg';
import css from './assets/css.jpg';
import js from './assets/js.jpg';
import python from './assets/python.jpg';
import profile from './assets/Anbu.jpg';
import reactjs from './assets/Reactjs.jpg';
import ml from './assets/ml.jpg';
import dl from './assets/dl.jpg';
import PdfViewer from "./PdfViewer";

const doc1 = '/pdf&rendition=1.pdf';
const doc2 = '/pdf&rendition=2.pdf';

function App() {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade');

    const handleScroll = () => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.classList.add('active');
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  function windowopen() {
    window.open("https://www.instagram.com/anbu3_678_b/");
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/anbarasu-boominathan-9a1500295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ");
  }

  return (
    <div className="App bg-dark text-light">
      <nav className="navbar sticky-top">
        <div className="logo">ANBARASU</div>
        <ul className="contents">
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>

      <div className="part2 fade" id='Home'>
        <div className="divisions">
          <div className="divi1">
            <h1>HI MY NAME IS ANBARASU B</h1>
          </div>
          <div className="divi2">
            <h3>I AM CURRENTLY A STUDENT, STUDYING B.TECH [ARTIFICIAL INTELLIGENCE AND DATA SCIENCE]</h3>
            <h3>I HAVE SKILLS IN DEVELOPMENT - PYTHON - HTML - CSS - JAVASCRIPT - BOOTSTRAP</h3>
            <h3>REACTJS - MACHINE LEARNING - DEEP LEARNING</h3>
            <div className="buttons bg-dark">
              <a className='button'
   href='https://wa.me/+91805396103?text=Hi Bro!!!...' 
   target='_blank' 
   rel="noreferrer">
   WHATSAPP
</a>

<button className='button' onClick={windowopen}>
  INSTAGRAM
</button>

<button className='button' onClick={linkedin}>
  LINKEDIN
</button>

            </div>
          </div>
        </div>
      </div>


      <div className="part3 fade" id='About'>
        <div className="content1">
          <h1>ABOUT</h1>
          <h3>
            I am currently pursuing my 3rd year of B.Tech in Artificial Intelligence and Data Science at Chettinad College of Engineering and Technology.
            I am passionate about building my technical skills, with a strong focus on Python, Machine Learning, and web development using frameworks like Django and ReactJS.
            Beyond academics, I enjoy playing cricket and carrom. My biggest strength is the support from my friends. I’m working on improving my English fluency.
          </h3>
        </div>
        <div className="img">
          <img src={profile} alt="profile" />
        </div>
      </div>

      <div id='Skills'>
        <div className="ski fade">
          <h1 className="skills">SKILLS</h1>
        </div>

        <div
          className="box"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className='html'>
            <div className='img'>
              <img src={html} alt="html" />
            </div>
            <div className='intro'>
              <h3>HTML</h3>
              <h5>I have a solid foundation in HTML...</h5>
            </div>
          </div>

          <div className="html">
            <div className='img'>
              <img src={css} alt="css" />
            </div>
            <div className='intro'>
              <h3>CSS</h3>
              <h5>I use CSS to design visually appealing websites...</h5>
            </div>
          </div>

          <div className="html">
            <div className='img'>
              <img src={js} alt="js" />
            </div>
            <div className='intro'>
              <h3>JAVASCRIPT</h3>
              <h5>I use JavaScript to bring interactivity...</h5>
            </div>
          </div>

          <div className='html'>
            <div className='img'>
              <img src={python} alt="python" />
            </div>
            <div>
              <h3>PYTHON</h3>
              <h5>I use Python to build efficient applications...</h5>
            </div>
          </div>

          <div className='html'>
            <div className='img'>
              <img src={reactjs} alt="reactjs" />
            </div>
            <div>
              <h3>REACT JS</h3>
              <h5>ReactJS is a powerful JavaScript library...</h5>
            </div>
          </div>

          <div className='html'>
            <div className='img'>
              <img src={ml} alt="ml" />
            </div>
            <div>
              <h3>MACHINE LEARNING</h3>
              <h5>ML enables systems to learn from data...</h5>
            </div>
          </div>

          <div className='html'>
            <div className='img'>
              <img src={dl} alt="dl" />
            </div>
            <div>
              <h3>DEEP LEARNING</h3>
              <h5>Deep Learning uses neural networks...</h5>
            </div>
          </div>
        </div>
      </div>

      <div className='aski fade'>
        <h1 className='addski'>ADDITIONAL SKILLS</h1>
        <div className='lists'>
          <h5>🢣 Basic of C</h5>
          <h5>🢣 Basic of Java</h5>
          <h5>🢣 Basic Knowledge for Data Structure and Design</h5>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className='certifications fade'>
        <h1>CERTIFICATIONS</h1>
        <div className='clist'>
          <h5>🢣 Full Stack Web Development Skills Vertex</h5>
          <h5>🢣 Web Development ReactJS IBM</h5>
        </div>
      </div>

      {/* PROJECTS */}
      <div className='projects fade'>
        <div className='pjts'>
          <h1>PROJECTS</h1>
        </div>
        <div className='plists'>
          <h5>🢣 Train Ticket Booking System(Mini Project)</h5>
          <h5>🢣 Event Ticket Booking System(IBM Project)</h5>
          <h5>🢣 Ott Platform(Mini Project)</h5>
          <h5>🢣 Cancer Detection</h5>
        </div>
      </div>

<div className="education-section fade" id="Education">
  <h1 className="edu-title">Education</h1>
  <p className="edu-sub">My academic journey</p>

  <div className="timeline">

    <div className="timeline-item">
      <div className="year">2026</div>
      <div className="content-box">
        <h3>B.Tech in Artificial Intelligence & Data Science</h3>
        <p>Chettinad College of Engineering & Technology</p>
        <p><strong>CGPA:</strong> 7.3 (up to 6th semester)</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="year">2022</div>
      <div className="content-box">
        <h3>Higher Secondary Certificate (HSC)</h3>
        <p>Vivekananda Higher Secondary School</p>
        <p><strong>Score:</strong> 54%</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="year">2020</div>
      <div className="content-box">
        <h3>Secondary School Leaving Certificate (SSLC)</h3>
        <p>Vivekananda Higher Secondary School</p>
        <p><strong>Score:</strong> 63%</p>
      </div>
    </div>

  </div>
</div>

    <div className='documents'>
      <h1>DOCUMENTS</h1>

  <div className='doc1'>
    <h3>SkillVertex Internship Certificate</h3>
    <PdfViewer pdfUrl={doc1} />
  </div>

  <div className='doc2'>
    <h3>SkillVertex Training Completion</h3>
    <PdfViewer pdfUrl={doc2} />
  </div>
    </div>

      <div className='contact fade' id='Contact'>
        <div className='con'>
          <h1>CONTACT</h1>
        </div>
        <div className='cdiv'>
          <div className='cbox'>
            <input type='text' placeholder='Enter your name'/>
            <input type='text' placeholder='Enter your email'/>
            <div className='content'>
              <input type='text' placeholder='Enter your message' />
            </div>
            <div className='buttons2 bg-dark'>
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
