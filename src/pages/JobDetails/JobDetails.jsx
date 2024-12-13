import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const job = useLoaderData();
    console.log(job);
    return (
        <div className="w-6/12 mx-auto my-5 text-center">
            <h2 className="text-3xl">job details for : {job.title}</h2>
            <p className="text-xl">Apply for : {job.company}</p>
            <Link to={`/jobApply/${job._id}`}>            <button className="btn btn-primary">Apply Now</button>
</Link>
        </div>
    );
};

export default JobDetails;