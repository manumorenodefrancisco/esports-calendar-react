import React from "react";
import {Text, View} from "react-native";
import {Calendar, LocaleConfig} from "react-native-calendars";
import {useCalendarViewModel} from "./CalendarViewModel";
import {styles} from "./CalendarStyle";

LocaleConfig.locales["es"] = {
    monthNames: [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ],
    monthNamesShort: [
        "Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.",
        "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."
    ],
    dayNames: [
        "Domingo", "Lunes", "Martes", "Miércoles",
        "Jueves", "Viernes", "Sábado"
    ],
    dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
    today: "Hoy"
};

LocaleConfig.defaultLocale = "es";

export const CalendarView = () => {
    const {
        selectedDate,
        onDayPress,
        markedDates
    } = useCalendarViewModel();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selecciona una fecha</Text>

            <Calendar
                firstDay={1}
                onDayPress={onDayPress}
                markedDates={markedDates}
                theme={{
                    todayTextColor: "#4f46e5",
                    arrowColor: "#4f46e5",
                    selectedDayBackgroundColor: "#4f46e5"
                }}
            />

            {selectedDate !== "" && (
                <Text style={styles.selectedText}>
                    Fecha seleccionada: {selectedDate}
                </Text>
            )}
        </View>
    );
};
