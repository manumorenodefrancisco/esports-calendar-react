import {useState} from "react";

export const useCalendarViewModel = () => {
    const [selectedDate, setSelectedDate] = useState<string>("");

    const onDayPress = (day: any) => {
        setSelectedDate(day.dateString);
    };

    const markedDates = selectedDate
        ?
        {
            [selectedDate]: {
                selected: true,
                selectedColor: "#4f46e5"
            }
        }   : {};

    return {
        selectedDate,
        onDayPress,
        markedDates
    };
};
