import { useState, useEffect } from "react";
import { getEventsUseCase } from "../../../../domain/useCases/getEventsUseCase";
import { Evento } from "../../../../domain/entities/event-interface";

export const CalendarViewModel = () => {

    const [selectedDate, setSelectedDate] = useState(""); // antes fechaSeleccionada
    const [events, setEvents] = useState<Evento[]>([]); // antes eventos
    const [loading, setLoading] = useState(false); // antes estaCargando

    useEffect(() => {
        const loadEvents = async () => {
            setLoading(true)
            try {
                const resultado = await getEventsUseCase()
                if (resultado.success && Array.isArray(resultado.data)) {
                    setEvents(resultado.data)
                } else {
                    setEvents([])
                }
            } catch (error) {
                console.log("Error al cargar eventos:", error)
                setEvents([])
            } finally {
                setLoading(false)
            }
        }

        loadEvents();
    }, []);

    const getDate = (dateTime: string) => {
        if (!dateTime) return "";
        if (dateTime.includes("T")) return dateTime.split("T")[0];
        return dateTime.slice(0, 10);
    };

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    const selectedDayEvents: Evento[] = [];
    for (let i = 0; i < events.length; i++) {
        const eventDate = getDate(events[i].scheduled_at);
        if (eventDate === selectedDate) {
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
