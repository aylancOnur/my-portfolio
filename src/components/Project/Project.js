import "./project.css";
import projects from "../../projectData";

const Project = () => {
  return (
    <>
      <section id="projects">
        <h2 className="projects-hedaer">Projeler</h2>
        <div>
          {projects.map((project, index) => (
            <article
              className={
                project.imgStart === "start" ? "row-reverse" : "projects"
              }
              key={index}
            >
              <img
                className="project-image"
                alt={project.title}
                src={project.image}
              />
              <div className="project-information">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  {project.tools.map((disc, index) => (
                    <span className="project-tools-item" key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img
                      src="./images/icons/github.svg"
                      alt="link to github page"
                      className="project-icon"
                    />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img
                      src="./images/icons/external-link.svg"
                      alt="link to github page"
                      className="project-icon"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="github">
        <a
          href="https://github.com/aylancOnur"
          target="_blank"
          rel="noreferrer"
        >
          <span>Daha Fazlası İçin Github</span>
        </a>
      </div>
    </>
  );
};

export default Project;
