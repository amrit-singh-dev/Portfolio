function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="project">
        <div className="project-info">
          <h3>Calculator App</h3>
          <p>Simple calculator using HTML, CSS & JavaScript.</p>
        </div>
        <a href="https://amrit-singh-dev.github.io/calculator-app/" target="_blank" rel="noreferrer" className="btn project-btn">
          View Project
        </a>
      </div>

      <div className="project">
        <div className="project-info">
          <h3>To-Do App</h3>
          <p>Task manager with local storage.</p>
        </div>
        <a href="https://amrit-singh-dev.github.io/To-Do-List-App/" target="_blank" rel="noreferrer" className="btn project-btn">
          View Project
        </a>
      </div>

      <div className="project">
        <div className="project-info">
          <h3>Quote Generator</h3>
          <p>Random quotes using JavaScript.</p>
        </div>
        <a href="https://amrit-singh-dev.github.io/Quote-generator-/" target="_blank" rel="noreferrer" className="btn project-btn">
          View Project
        </a>
      </div>

      <div className="project">
        <div className="project-info">
          <h3>Weather App (React)</h3>
          <p>Real-time weather using API in React.</p>
        </div>
        <a href="https://amrit-singh-dev.github.io/weather-dashboard-react/" target="_blank" rel="noreferrer" className="btn project-btn">
          View Project
        </a>
      </div>
    </section>
  );
}

export default Projects;