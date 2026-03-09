import "./AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="wrapper" id="about-me">
        <div className="left-side">
          <h1 style={{ textAlign: "left" }}>Hi, I'm David Johansson 👋</h1>
          <p className="bio">
            Software Engineer in the DFW area. Bachelors in CS @ UTD, Pursuing
            MS in IT @ VT. Full-stack developer focused on scalable APIs,
            optimized databases, and clean, user-centered web apps.
          </p>
          <h2 style={{ marginTop: "-0.5rem" }}>
            <a href="mailto:davidjohansson826@gmail.com">Email</a> |{" "}
            <a href="https://www.linkedin.com/in/davidjoh8">LinkedIn</a> |{" "}
            <a href="https://github.com/djoh826">GitHub</a>
          </h2>
        </div>
        <div className="right-side">
          <img src="/assets/Grad2.png" className="portrait"></img>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
