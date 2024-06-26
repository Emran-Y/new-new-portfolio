import React from "react";
import Fade from "react-reveal/Fade";
import "./projects.scss";

const Project = (props) => {
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props;
  return (
    <Fade bottom>
      <section className="section__projects-single-projects">
        <img src={imgUrl} alt="" />
        <div className="section__projects-contents">
          <p>{name}</p>
          <p className="desc">{desc}</p>
          <div className="section__projects-stack">
            <h2>Built with</h2>
            <span
              style={{
                fontSize: "0.8rem",
              }}
            >
              {stack}
            </span>
          </div>
          <div className="section__projects-icon">
            <a href={website.url} target="_blank" className="switch__color">
              {website.icon}
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Project;
