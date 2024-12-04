<script setup>
import { Job } from '@/models/Job';



defineProps({
    jobProp: { type: Job, required: true }
})

</script>


<template>
    <p>{{ jobProp.description }} {{ jobProp.company }}</p>
</template>


<style lang="scss" scoped></style>