<script setup>
import { Job } from '@/models/Job';



defineProps({
    jobProp: { type: Job, required: true }
})

</script>


<template>
    <div class="row bg-light shadow m-3 rounded">
        <div class="col-md-8">
            <div class="p-2 d-flex flex-column justify-content-between h-100">
                <div>
                    <h3>
                        Company: {{ jobProp.company }}
                    </h3>
                    <p>Hours: {{ jobProp.hours }} Rate: {{ jobProp.rate }}</p>
                    <p>{{ jobProp.description }}</p>
                    <p>Listed on {{ jobProp.createdAt.toLocaleDateString() }}</p>
                </div>
                <div class="text-end">
                    <span>{{ jobProp.creator.name }}</span>
                    <img :src="jobProp.creator.picture" :alt="jobProp.creator.name" class="creator-img ms-3">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.job-img {
    height: 45dvh;
    width: 100%;
    object-fit: cover;
}

.row {
    border: 3px solid;
}

.creator-img {
    height: 10dvh;
    aspect-ratio: 1/1;
    border-radius: 50%;
    object-fit: cover;
}
</style>