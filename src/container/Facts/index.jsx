import React from "react";
import factsData from "../../data/facts.data";
function FactsDiv (){
    return (
      <div className="container-xxl bg-primary fact py-5 wow fadeInUp">
        <div className="container py-5 px-lg-5">
          <div className="row g-4">
            {factsData.map((fact, index) => (
              <div
                key={index}
                className={`col-md-6 col-lg-3 text-center wow fadeIn`}
              >
                <i className={`fa fa-3x ${fact.icon} text-secondary mb-3`} />
                <h1 className="text-white mb-2" data-toggle="counter-up">
                  {fact.num}
                </h1>
                <p className="text-white mb-0">{fact.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
export default FactsDiv;