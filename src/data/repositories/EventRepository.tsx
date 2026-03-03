import { EventRepository, EventsResponse } from "../../domain/repositories/EventRepository";
import APITiendaOnline from "../sources/remote/api/APITiendaOnline";
import { AxiosError } from "axios";

export class EventRepositoryImpl implements EventRepository {

    async getEvents(): Promise<EventsResponse> {
        try {
            const response = await APITiendaOnline.get<EventsResponse>("/events/")
            const responseData = response.data;

            // { success: boolean, data: Evento[] }
            if (responseData && Array.isArray(responseData.data)) {
                return { success: responseData.success, data: responseData.data }
            }

            return { success: false, data: [] }
        }
        catch (error) {
            const e = error as AxiosError<EventsResponse>
            const errorData = e.response?.data
            return { success: false, data: Array.isArray(errorData?.data) ? errorData.data : [] }
        }
    }
}