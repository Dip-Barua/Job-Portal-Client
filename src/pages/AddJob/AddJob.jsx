const AddJob = () => {
  return (
    <div className="w-6/12 mx-auto">
      <h2 className="text-3xl">Post a new Job</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
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
          <select className="select select-ghost w-full input-bordered ">
            <option disabled selected>
              Pick a job type
            </option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Intern</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select className="select select-ghost w-full input-bordered ">
            <option disabled selected>
              Pick a job field
            </option>
            <option>Engineering</option>
            <option>Marketting</option>
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
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="text"
            placeholder="Max"
            name="max"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <select className="select select-ghost w-full input-bordered ">
            <option disabled selected>
              Select any currency
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
         </select>
        </div>
        
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            type="description"
            name="job_description"
            placeholder="job-location"
            className="input input-bordered p-5"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="description"
            placeholder="Company Name"
            name="company_name"
            className="input input-bordered p-5"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            type="description"
            placeholder="job-location"
            name="job_requirements"
            className="input input-bordered p-5"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            type="description"
            placeholder="job-Responsibilities"
            name="job_responsibilities"
            className="input input-bordered p-5"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="hr_name"
            placeholder="Hr-Name"
            name="hr_name"
            className="input input-bordered p-5"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="description"
            placeholder="HR Email"
            name="hr_email"
            className="input input-bordered p-5"
            required
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
