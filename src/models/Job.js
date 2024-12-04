export class Job {
    constructor(data) {
        this.id = data.id
        this.company = data.company
        this.jobTitle = data.jobTitle
        this.rate = data.rate
        this.hours = data.hours
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
    }
}