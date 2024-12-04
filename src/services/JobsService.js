import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"


class JobsService {
    async getJobs() {
        const response = await api.get('api/jobs')
        logger.log('Got 🏘️🏘️', response.data)
    }
}
export const jobsService = new JobsService()