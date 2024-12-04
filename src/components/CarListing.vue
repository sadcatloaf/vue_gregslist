<script setup>
import { Car } from '@/models/Car.js';

defineProps({
  carProp: { type: Car, required: true }
})
</script>


<template>
  <div class="row bg-light shadow" :style="{ borderColor: carProp.color }">
    <div class="col-md-4 px-0">
      <img :src="carProp.imgUrl" :alt="`${carProp.make} ${carProp.model}`" class="img-fluid car-img">
    </div>
    <div class="col-md-8">
      <div class="p-2 d-flex flex-column justify-content-between h-100">
        <div>
          <h2>{{ carProp.year }} {{ carProp.make }} {{ carProp.model }}</h2>
          <p class="fs-3">${{ carProp.price }}</p>
          <p>{{ carProp.description }}</p>
          <p>Listed on {{ carProp.createdAt.toLocaleDateString() }}</p>
        </div>
        <div class="text-end">
          <span>{{ carProp.creator.name }}</span>
          <img :src="carProp.creator.picture" :alt="carProp.creator.name" class="creator-img ms-3">
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.car-img {
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