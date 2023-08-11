import React from "react";

const Title = ({ title, text }) => {
  return (
    <div class="wow fadeInUp" data-wow-delay="0.1s">
      <h2 class="text-center mb-5">{title}</h2>
      {text && (
        <p className="section-title text-secondary justify-content-center">
          {text}
        </p>
      )}
    </div>
  );
};

export default Title;
