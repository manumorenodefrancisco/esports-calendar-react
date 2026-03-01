import { useState, useEffect } from "react";
import { getEventsUseCase } from "../../../../domain/useCases/getEventsUseCase";
import { Evento } from "../../../../domain/entities/event-interface";

export const useCalendarViewModel = () => {

    const [selectedDate, setSelectedDate] = useState("");
    const [events, setEvents] = useState<Evento[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const cargar = async () => {
            try {
                setLoading(true)
                const res = await getEventsUseCase()
                if (res && (res as any).data && Array.isArray((res as any).data)) {
                    setEvents((res as any).data)
                }
                else {
                    setEvents([])
                }
            }
            catch (e) {
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

    const markedDates: any = {};

    for (let i = 0; i < events.length; i++) {

        const event = events[i];
        const dia = getDia(event.scheduled_at)

        if (!dia) continue;

        if (!markedDates[dia]) {
            markedDates[dia] = {
                dots: []
            };
        }

        let color = "#4f46e5";
        if (event.status && event.status.toLowerCase() === "finished") {
            color = "#10b981";
        }
        if (event.status && event.status.toLowerCase() === "canceled") {
            color = "#ef4444";
        }

        markedDates[dia].dots.push({
            key: String(event.external_id),
            color: color
        });
    }

    //  la marcamos
    if (selectedDate !== "") {

        if (!markedDates[selectedDate]) {
            markedDates[selectedDate] = {
                dots: []
            };
        }

        markedDates[selectedDate].selected = true;
        markedDates[selectedDate].selectedColor = "#4f46e5";
    }

    return {
        selectedDate,
        onDayPress,
        markedDates,
        selectedDayEvents,
        loading
    };
};
