import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Job } from "@/models/Job.js"
import { AppState } from "@/AppState.js"


class JobsService {
   async createJob(editableJobData) {
       const response = await api.post('api/jobs', editableJobData)
       logger.log('Created 👷‍♂️', response.data)
    }

    async getJobs() {
        const response = await api.get('api/jobs')
        logger.log('Got 👷‍♂️👷‍♂️', response.data)
        const jobs = response.data.map(jobPOJO => new Job(jobPOJO))
        AppState.jobs = jobs
    }

}
export const jobsService = new JobsService()