import React from "react";
import { Text, View, FlatList } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { useCalendarViewModel } from "./CalendarViewModel";
import { styles } from "./CalendarStyle";

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
        markedDates,
        selectedDayEvents
    } = useCalendarViewModel();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Calendario Competitivo</Text>

            <Calendar
                firstDay={1}
                markingType="multi-dot"
                onDayPress={onDayPress}
                markedDates={markedDates}
                theme={{
                    todayTextColor: "#4f46e5",
                    arrowColor: "#4f46e5",
                    selectedDayBackgroundColor: "#4f46e5",
                    textSectionTitleColor: "#6b7280",
                    monthTextColor: "#111827",
                    textMonthFontWeight: "700"
                }}
            />
            {/*si hay dia seleccionado, hace la 2a condicion*/}
            {selectedDate !== "" && (
                <Text style={styles.selectedText}>
                    Eventos para: {selectedDate}
                </Text>
            )}

            <View style={styles.eventContainer}>
                <FlatList
                    data={selectedDayEvents}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.eventCard}>
                            <Text style={styles.eventTitle}>
                                {item.title}
                            </Text>
                        </View>
                    )}
                    ListEmptyComponent={
                        selectedDate !== "" ? (
                            <Text style={{ textAlign: "center", marginTop: 10 }}>
                                No hay eventos este día
                            </Text>
                        ) : null
                    }
                />
            </View>

        </View>
    );
};
