import { useState, useEffect } from "react";
import { getEventsUseCase } from "../../../../domain/useCases/getEventsUseCase";
import { Evento } from "../../../../domain/entities/event-interface";

export const CalendarViewModel = () => {

    const [selectedDate, setSelectedDate] = useState("");
    const [events, setEvents] = useState<Evento[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cargar = async () => {
            try {
                setLoading(true)
                const respuesta = await getEventsUseCase()
                if (respuesta && (respuesta as any).data && Array.isArray((respuesta as any).data)) {
                    setEvents((respuesta as any).data)
                }
                else {
                    setEvents([])
                }
            }
            catch {
                setEvents([])
            }
            finally {
                setLoading(false)
            }
        }
        cargar()
    }, [])

    const getDia = (s: string) => {
        if (!s) return ""
        if (s.includes("T")) return s.split("T")[0]
        return s.slice(0, 10)
    }

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    const selectedDayEvents: Evento[] = [];
    for (let i = 0; i < events.length; i++) {
        const d = getDia(events[i].scheduled_at)
        if (d === selectedDate) {
            selectedDayEvents.push(events[i]);
        }
    }

    return {
        selectedDate,
        onDayPress,
        selectedDayEvents,
        loading
    };
};