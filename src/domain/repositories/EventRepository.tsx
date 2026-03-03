import {DataResponseAPI} from "../../data/sources/remote/models/DataResponseAPI";
import {Evento} from "../entities/event-interface";

export interface EventRepository {
    getEvents(): Promise<EventsResponse>
}

export interface EventsResponse extends DataResponseAPI {
    data?: Evento[];
}