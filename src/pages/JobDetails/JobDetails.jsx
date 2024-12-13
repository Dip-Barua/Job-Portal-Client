import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

    const job = useLoaderData();
    console.log(job);
    return (
        <div className="w-6/12 mx-auto my-5 text-center">
            <h2 className="text-3xl">job details for : {job.title}</h2>
            <p className="text-xl">Apply for : {job.company}</p>
        </div>
    );
};

export default JobDetails;