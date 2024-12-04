<script setup>
import { jobsService } from '@/services/JobsService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { ref } from 'vue';


const editableJobData = ref({
    hours: 0,
    company: '',
    rate: 0,
    description: '',
    jobTitle: ''
})

async function createJob() {
    try {
        await jobsService.createJob(editableJobData.value)
        editableJobData.value = {
            hours: 0,
            company: '',
            rate: 0,
            description: '',
            jobTitle: ''
        }
        Pop.success('Job successfully Lsited! 👷‍♂️📃')
    }
    catch (error) {
        logger.error('[Creating 👷‍♂️]', error)
        Pop.meow(error);
    }
}


</script>


<template>
    <form @submit.prevent="createJob()">
        <div class="form-floating mb-3">
            <input v-model="editableJobData.jobTitle" type="text" class="form-control" id="jobTitle"
                placeholder="JobTitle..." required maxlength="500">
            <label for="JobTitle">JobTitle</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableJobData.company" type="text" class="form-control" id="company"
                placeholder="Company..." required maxlength="500">
            <label for="Company">Company</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableJobData.hours" type="number" class="form-control" id="hour" placeholder="Hours..."
                required maxlength="500">
            <label for="Hours">Hours</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableJobData.rate" type="number" class="form-control" id="rate" placeholder="Rate..."
                required maxlength="500">
            <label for="Rate">Rate</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableJobData.description" type="text" class="form-control" id="description"
                placeholder="Description..." required maxlength="500">
            <label for="Description">Description</label>
        </div>
        <div class="text-end">
            <button class="btn btn-success" type="submit">Submit</button>
        </div>
    </form>
</template>


<style lang="scss" scoped></style>