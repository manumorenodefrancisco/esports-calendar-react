import {EventRepository, EventsResponse} from "../../domain/repositories/EventRepository";
import APITiendaOnline from "../sources/remote/api/APITiendaOnline";
import {AxiosError} from "axios";

export class EventRepositoryImpl implements EventRepository {

    async getEvents(): Promise<EventsResponse> {
        try {
            const response = await APITiendaOnline.get("/events/")
            const data = response.data as any;

            if (Array.isArray(data)) {
                return Promise.resolve({success: true, data: data})
            }

            return Promise.resolve(data)
        }
        catch (error) {
            let e = (error as AxiosError)
            return Promise.resolve(JSON.parse(JSON.stringify(e.response?.data)) as EventsResponse);
        }
    }
}
