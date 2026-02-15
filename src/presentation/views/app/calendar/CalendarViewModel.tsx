import { useState } from "react";

export interface CalendarEvent {
    id: string;
    title: string;
    date: string; // YYYY-MM-DD
    type: string;
}

export const useCalendarViewModel = () => {

    const [selectedDate, setSelectedDate] = useState("");

    // eventos de ejemplo
    const events: CalendarEvent[] = [
        { id: "1", title: "Torneo Valorant", date: "2026-02-18", type: "torneo" },
        { id: "2", title: "Scrim LoL", date: "2026-02-18", type: "scrim" },
        { id: "3", title: "Liga CS2", date: "2026-02-22", type: "liga" }
    ];

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    const selectedDayEvents = [];
    for (let i = 0; i < events.length; i++) {
        if (events[i].date === selectedDate) {
            selectedDayEvents.push(events[i]);
        }
    }

    const markedDates: any = {};

    for (let i = 0; i < events.length; i++) {

        const event = events[i];

        if (!markedDates[event.date]) {
            markedDates[event.date] = {
                dots: []
            };
        }

        let color = "#4f46e5";

        if (event.type === "torneo") {
            color = "#ef4444";
        }

        if (event.type === "scrim") {
            color = "#3b82f6";
        }

        if (event.type === "liga") {
            color = "#10b981";
        }

        markedDates[event.date].dots.push({
            key: event.id,
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
        selectedDayEvents
    };
};
