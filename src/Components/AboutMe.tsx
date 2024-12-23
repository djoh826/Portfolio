import './AboutMe.css';

function AboutMe() {
  return (
    <>
      <div>
        <h1>Hi, I'm David Johansson 👋</h1>
      </div>
      <img src="/assets/Grad2.png" className="portrait"></img>
      <h2>Full-stack Developer and Software Engineer</h2>
      <h2>
        <a href="mailto:davidjohansson826@gmail.com">Email</a> |{' '}
        <a href="https://www.linkedin.com/in/davidjoh8">LinkedIn</a> |{' '}
        <a href="https://github.com/djoh826">GitHub</a>
      </h2>
      <h2 id="about-me">About Me</h2>
      <p>
        I'm a software engineer based in the DFW area. I have a Bachelor's
        degree in Computer Science from UTD and currently work at Argo as a
        Software Engineer. I'm also currently pursuing a Master's Degree in
        Information Technology at Virginia Tech. Outside of my job, I enjoy
        working on side projects and learning new technologies. These can range
        from creating websites for local businesses, creating web extensions or
        scripts to automate my workflows, or building full-stack applications to
        keep my skills current.
      </p>
    </>
  );
}

export default AboutMe;
