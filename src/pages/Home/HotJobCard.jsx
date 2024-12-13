import { RiMapPin2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
       <div className="flex gap-2 m-2">
       <figure>
          <img
          className="w-16"
            src={company_logo}
            alt="Shoes"
          />
        </figure>
        <div>
            <h4 className="text-2xl">{company}</h4>
            <p className="flex items-center gap-1"><RiMapPin2Fill />
            {location}</p>
        </div>
       </div>
        <div className="card-body">
          <h2 className="card-title">{title}
          <div className="badge badge-secondary">NEW</div>
          </h2>

          <p>{description}</p>
          <div>{
            requirements.map((skill , index) => <div key={index} className="badge badge-accent m-1">{skill}</div>
            )
            }
</div>
          <div className="card-actions ">
            <p className="text-lg ">Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
            <Link to={`/jobs/${_id}`}>            <button className="btn btn-primary">Apply</button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;