<script setup>
import { House } from '@/models/House';


defineProps({
    houseProp: { type: House, required: true }
})

</script>


<template>
    <p>{{ houseProp.description }} {{ houseProp.price }}</p>
</template>


<style lang="scss" scoped></style>