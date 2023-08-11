import React from "react";
import Title from "../../components/Title";
import projectsData from "../../data/projects.data";
function Projects() {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <Title title="Our Projects" text="Recently Completed Projects" />
        <div className="row g-4 portfolio-container">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 col-md-6 portfolio-item ${
                index % 2 === 0 ? "first" : "second"
              } wow fadeInUp`}
            >
              <div className="rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid w-100" src={item.img} alt="" />
                </div>
                <div className="bg-light p-4">
                  <p className="text-primary fw-medium mb-2"></p>
                  <h5 className="lh-base mb-0">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
