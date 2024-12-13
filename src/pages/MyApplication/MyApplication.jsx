import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyApplication = () => {

    const { user } = useAuth();
    const [jobs , setJobs] = useState([]);

    useEffect(()=> {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[user.email])


    return (
        <div className="w-8/12 mx-auto text-center">
            <h2 className="text-3xl">My Applications : {jobs.length}</h2>
            
        </div>
    );
};

export default MyApplication;