import React from "react";
import Feature from "../../components/Feature";
import featureData from "../../data/feature.data";
function FeatureDiv (){
return (
  <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
      <div className="row g-4">
        {featureData.map((item, index) => (
          <div
            className="col-lg-4 wow fadeInUp"
            data-wow-delay={`${0.1 * (index + 1)}s`}
            key={index}
          >
            <div className="feature-item bg-light rounded text-center p-4">
              <Feature item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}
export default FeatureDiv;