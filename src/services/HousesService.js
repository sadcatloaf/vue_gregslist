import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { House } from "@/models/House.js";


class HousesService {
   async createHouse(editableHouseData) {
        const response = await api.post('api/houses', editableHouseData)
        logger.log('Created 🏘️', response.data)
        const house = new House(response.data)
        AppState.houses.push(house)
    }
    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('Got 🏘️🏘️', response.data)
        const houses = response.data.map(housePOJO => new House(housePOJO))
        AppState.houses = houses
    }
}
export const housesService = new HousesService()