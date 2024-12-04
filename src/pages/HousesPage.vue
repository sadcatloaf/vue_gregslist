<script setup>
import { AppState } from '@/AppState';
import HouseListing from '@/components/HouseListing.vue';
import { housesService } from '@/services/HousesService';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses)

onMounted(() => {
    getHouses()
})

async function getHouses() {
    try {
        await housesService.getHouses()
    } catch (error) {
        Pop.error(error)
        logger.error('[Get 🏘️🏘️]', error)
    }
}
</script>
<template>
    <div class="container">
        <section class="row mb-3">
            <div class="col-12">
                <h1 class="text-center">Houses</h1>
            </div>
        </section>
        <section class="row">
            <div v-for="house in houses" :key="house.id" class="col-12">
                <HouseListing :house-prop="house" />
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped></style>