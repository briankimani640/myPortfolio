body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f9fa;
  color: #212529;
  scroll-behavior: smooth;
}

/* navbar */
.navbar {
  transition: background-color 0.4s ease;
}

.navbar-brand {
  font-size: 1.4rem;
  letter-spacing: 0.5px;
}

.text-teal {
  color: #00ADB5 !important;
}

.nav-link {
  color: #ffffff !important;
  font-weight: 500;
  margin-left: 10px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00ADB5 !important;
}

/* hero part*/
.hero-section {
  min-height: 100vh;
  background-color: #000000;
  padding-top: 100px; /* fixed navbar */
  text-align: left;
}

.hero-text h1 {
  font-size: 2.8rem;
}

.hero-text p {
  font-size: 1.2rem;
  color: #e0e0e0;
}

.hero-img img {
  border: 5px solid #00ADB5;
}

/* buttons*/
.btn-teal {
  background-color: #00ADB5;
  color: #ffffff;
  border: none;
  transition: 0.3s ease;
}

.btn-teal:hover {
  background-color: #00939b;
  transform: translateY(-3px);
}

.hover-btn {
  transition: 0.3s ease;
}

.hover-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0px 4px 10px rgba(0, 173, 181, 0.4);
}

/* about*/
#about {
  background-color: #f5f5f5;
}

#about h2 {
  color: #000;
}

#about p {
  font-size: 1.1rem;
  color: #333;
}

/* projects */
#projects {
  background-color: #121212;
}

.project-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 6px 15px rgba(0, 173, 181, 0.3);
}

/* skills*/
.skill-card {
  background-color: #ffffff;
  border: 2px solid #00ADB5;
  color: #000;
  font-weight: 600;
  border-radius: 10px;
  padding: 20px 0;
  transition: 0.3s ease;
}

.skill-card:hover {
  background-color: #00ADB5;
  color: #fff;
  transform: scale(1.05);
}

/* contact */
#contact {
  background-color: #1a1a1a;
}

#contact p {
  color: #ccc;
  font-size: 1.1rem;
}

/* footer*/
footer {
  background-color: #000;
  color: #ccc;
}

footer p {
  margin: 0;
  font-size: 0.95rem;
}

/* responsiveness */
@media (max-width: 992px) {
  .hero-text {
    text-align: center;
  }
  .hero-section {
    padding: 120px 0 60px;
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2rem;
  }
  .hero-img img {
    width: 250px;
  }
}

@media (max-width: 576px) {
  .btn-teal, .btn-outline-light {
    display: block;
    margin: 10px auto;
  }
}
.navbar-scrolled {
  background-color: rgba(0, 0, 0, 0.95) !important;
  box-shadow: 0 2px 10px rgba(0, 173, 181, 0.3);
}

.hover-btn {
  position: relative;
  overflow: hidden;
}

.hover-btn::after {
  content: "";
  position: absolute;
  top: var(--y);
  left: var(--x);
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  transition: width 0.4s ease, height 0.4s ease;
}

.hover-btn:hover::after {
  width: 300px;
  height: 300px;
}

