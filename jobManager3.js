let jobArray = [];

function addJob(title, company, salary, location) {
  if (!title || !company || !salary || !location) {
    return false;
  }

  const newJob = { id: jobArray.length + 1, title, company, company, location };
  jobArray.push(newJob);
  return newJob;
}

function readJobs() {
  return jobArray;
}

// TODO: Implement updateJob(id, updatedDetails) function

function update(id, updatedDetails) {

  const job = jobArray.find(p => p.id === id);
  if (!job) {
    return false;  // job not found, can't update
  }

  // Update the job's details
  Object.assign(job, updatedDetails);
  return job;
}

module.exports = { addJob, readJobs, jobArray };