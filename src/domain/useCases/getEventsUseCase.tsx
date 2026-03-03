import {EventRepositoryImpl} from "../../data/repositories/EventRepository";

const {getEvents} = new EventRepositoryImpl();

export const getEventsUseCase = async () => {
    return await getEvents()
}
