<script setup>
import { AppState } from '@/AppState';
import { House } from '@/models/House';
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
            <div class="col-12">
                {{ houses }}
            </div>
        </section>
    </div>
</template>
<style lang="scss" scoped></style>