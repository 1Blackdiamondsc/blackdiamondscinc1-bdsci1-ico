const Join = ({
  ClassTop,
  ClassDown,
  ClassSteps,
  Steps,
  title
}) => {

  return (
    <div className={ClassTop}>
      <div className={ClassDown}>
        <div className="service_single_content text-center mb-30 fadeInUp" data-wow-delay="0.2s">
          <div className="cycle_icon">
            <span className={ClassSteps}>{Steps}</span>
          </div>
          <h6>{title}</h6>
          <p>Come And Join Us.</p>
        </div>
      </div>
    </div>
  );
}

export default Join;
