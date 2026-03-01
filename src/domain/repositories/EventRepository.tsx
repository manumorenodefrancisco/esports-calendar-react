import {DataResponseAPI} from "../../data/sources/remote/models/DataResponseAPI";
import {Evento} from "../entities/event-interface";

export interface EventsResponse extends DataResponseAPI {
    data?: Evento[];
}

export interface EventRepository {
    getEvents(): Promise<EventsResponse>
}
