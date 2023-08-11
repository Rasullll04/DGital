import React from "react";
import Title from "../Title";
import servicesData from "../../data/services.data";

function ServicesDiv (){
    return (
      <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
          <Title title="Our Services" text="What Solutions We Provide" />
          <div className="row g-4">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
              >
                <div className="service-item d-flex flex-column text-center rounded">
                  <div className="service-icon flex-shrink-0">
                    <i className={`fa fa-2x ${item.iconClass}`} />
                  </div>
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="m-0">{item.description}</p>
                  <a className="btn btn-square" href="#">
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
export default ServicesDiv;