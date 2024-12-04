<script setup>
import { ref } from 'vue';



const editableHouseData = ref({
    bedrooms: 0,
    bathrooms: 0,
    imgUrl: '',
    levels: 0,
    price: 0,
    description: ''
})


</script>


<template>
    <form>
        <div class="form-floating mb-3">
            <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="bathroom"
                placeholder="Bathroom..." required maxlength="500">
            <label for="Bathrooms">Bathrooms</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="bedroom"
                placeholder="Bedroom..." required maxlength="500">
            <label for="Bedrooms">Bedrooms</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableHouseData.levels" type="number" class="form-control" id="levels"
                placeholder="Bathroom..." required maxlength="500">
            <label for="Levels">Levels</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableHouseData.imgUrl" type="url" class="form-control" id="imgUrl"
                placeholder="House ImgUrl..." required maxlength="500">
            <label for="imgUrl">House ImgUrl</label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="editableHouseData.description" type="text" class="form-control" id="description"
                placeholder="Description..." required maxlength="500">
            <label for="Description">Description</label>
        </div>
        <div class="mb-3">
            <label for="price" class="form-label">House Price</label>
            <input v-model="editableHouseData.price" type="range" class="form-range" id="price" max="1000000" min="0">
        </div>
        <div class="text-end">
            <button class="btn btn-success" type="submit">Submit</button>
        </div>
    </form>
</template>


<style lang="scss" scoped></style>