const AddJob = () => {
    const handleAddJob = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const initialData = Object.fromEntries(formData.entries());
      console.log(initialData);
  
      const { min, max, currency, job_requirements, job_responsibilities, ...newJob } = initialData;
      console.log(newJob);
  
      newJob.salaryRange = { min, max, currency };
  
      newJob.requirements = job_requirements.trim().split('\n').filter(Boolean);
      newJob.job_responsibilities = job_responsibilities.trim().split('\n').filter(Boolean);
  
      console.log(newJob); 


fetch('http://localhost:5000/jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newJob)
  
})


    };



  
    return (
      <div className="w-6/12 mx-auto">
        <h2 className="text-3xl">Post a new Job</h2>
        <form onSubmit={handleAddJob} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="job-title"
              placeholder="job-title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Location</span>
            </label>
            <input
              type="text"
              name="job-location"
              placeholder="job-location"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <select name="job-type" className="select select-ghost w-full input-bordered">
              <option disabled selected>Pick a job type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Intern</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <select name="job-category" className="select select-ghost w-full input-bordered">
              <option disabled selected>Pick a job field</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Teaching</option>
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-end">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"></span>
              </label>
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Currency</span>
              </label>
              <select
                name="currency"
                className="select select-ghost w-full input-bordered"
              >
                <option disabled selected>Select any currency</option>
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
                <option value="INR">INR</option>
              </select>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <textarea
              name="job_description"
              placeholder="job-description"
              className="input input-bordered p-5"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              className="input input-bordered p-5"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Requirements</span>
            </label>
            <textarea
              name="job_requirements"
              placeholder="Job Requirements"
              className="input input-bordered p-5"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibilities</span>
            </label>
            <textarea
              name="job_responsibilities"
              placeholder="Job Responsibilities"
              className="input input-bordered p-5"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="input input-bordered p-5"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              className="input input-bordered p-5"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-3/12 mx-auto">Submit</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AddJob;
  