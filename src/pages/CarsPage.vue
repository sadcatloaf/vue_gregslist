<script setup>
import { carsService } from '@/services/CarsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';

onMounted(() => {
  getCars()
})

async function getCars() {
  try {
    await carsService.getCars()
  } catch (error) {
    Pop.error(error)
    logger.error('[GET CARS]', error)
  }
}

</script>


<template>
  <div class="container">
    <section class="row mb-3">
      <div class="col-12">
        <h1 class="text-center">Cars</h1>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>