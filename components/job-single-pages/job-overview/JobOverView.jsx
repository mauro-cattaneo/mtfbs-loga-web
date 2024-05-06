const JobOverView = ({ job }) => {
  return (
    <div className="widget-content">
      <ul className="job-overview">
        <li>
          <i className="icon icon-reference"></i>
          <h5>Reference number:</h5>
          <span>{job?.referenceNumber}</span>
        </li>
        <li>
          <i className="icon icon-calendar"></i>
          <h5>Date Posted:</h5>
          <span>{job?.publishFromDate}</span>
        </li>
        <li>
          <i className="icon icon-expiry"></i>
          <h5>Expiration date:</h5>
          <span>{job?.publishToDate}</span>
        </li>
        <li>
          <i className="icon icon-location"></i>
          <h5>Location:</h5>
          <span>{job?.location}</span>
        </li>
        <li>
          <i className="icon icon-user-2"></i>
          <h5>Job Title:</h5>
          <span>{job?.title}</span>
        </li>
        <li>
          <i className="icon icon-clock"></i>
          <h5>Hours:</h5>
          <span>40h / week</span>
        </li>
        <li>
          <i className="icon icon-rate"></i>
          <h5>Rate:</h5>
          <span>CHF 15 - 25 / hour</span>
        </li>
        <li>
          <i className="icon icon-salary"></i>
          <h5>Salary:</h5>
          <span>CHF 35k - 45k</span>
        </li>
      </ul>
    </div>
  );
};

export default JobOverView;
