<script setup>
import { House } from '@/models/House';
import { logger } from '@/utils/Logger';
import Pop from '@/utils/Pop';


const props = defineProps({
    houseProp: { type: House, required: true }
})

async function deleteHouse() {
    try {
        const message = 'Are you sure you want to DELETE this house?'
        const confirmed = await Pop.confirm(message)
        if (!confirmed) { return }
    }
    catch (error) {
        Pop.meow(error);
        logger.error('[Deleting House]', error)
    }
}
</script>


<template>
    <div class="row bg-light shadow m-3 rounded">
        <div class="col-md-4 px-0 ">
            <img :src="houseProp.imgUrl" alt="" class="img-fluid house-img">
        </div>
        <div class="col-md-8">
            <div class="p-2 d-flex flex-column justify-content-between h-100">
                <div>
                    <h2>{{ houseProp.description }}</h2>
                    <p>Levels: {{ houseProp.levels }} Bathrooms: {{ houseProp.bathrooms }} Bedrooms:
                        {{ houseProp.bedrooms }} {{ houseProp.year }}</p>
                    <p>${{ houseProp.price }}</p>
                    <p>Listed on {{ houseProp.createdAt.toLocaleDateString() }}</p>
                </div>
                <div class="text-end">
                    <span>{{ houseProp.creator.name }}</span>
                    <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" class="creator-img ms-3">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.house-img {
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