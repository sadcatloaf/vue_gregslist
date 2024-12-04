<script setup>
import { Car } from '@/models/Car.js';

defineProps({
  carProp: { type: Car, required: true }
})
</script>


<template>
  <p>{{ carProp.make }} {{ carProp.model }}</p>
</template>


<style lang="scss" scoped></style>