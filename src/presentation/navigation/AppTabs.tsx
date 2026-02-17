import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome} from "@expo/vector-icons";
import {Pressable} from "react-native";

import {CalendarView} from "../views/app/calendar/CalendarView";
import {NotificationsView} from "../views/app/notifications/NotificationsView";
import {ProfileView} from "../views/app/profile/ProfileView";

export type AppTabParamList = {
    Calendar: undefined;
    Notifications: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export const AppTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Calendar"
            screenOptions={({route, navigation}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#111111",
                tabBarInactiveTintColor: "#9CA3AF",
                tabBarStyle: {
                    height: 64,
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderTopWidth: 1,
                    borderTopColor: "#E5E7EB",
                    backgroundColor: "#FFFFFF",
                },
                tabBarItemStyle: {
                    flex: 1,
                },
                tabBarButton: (props) => (
                    <Pressable
                        accessibilityRole={props.accessibilityRole}
                        accessibilityState={props.accessibilityState}
                        accessibilityLabel={props.accessibilityLabel}
                        testID={props.testID}
                        onLongPress={props.onLongPress}
                        onPress={() => {
                            // Forzamos navegación por nombre de pestaña.
                            navigation.navigate(route.name as never);
                        }}
                        hitSlop={12}
                        style={[props.style, {justifyContent: "center"}]}
                    >
                        {props.children}
                    </Pressable>
                ),
                tabBarIcon: ({color}) => {
                    const size = 26;

                    let name: React.ComponentProps<typeof FontAwesome>["name"] = "home";
                    if (route.name === "Calendar") name = "home";
                    if (route.name === "Notifications") name = "bell";
                    if (route.name === "Profile") name = "user";

                    return <FontAwesome name={name} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name={"Calendar"} component={CalendarView} />
            <Tab.Screen name={"Notifications"} component={NotificationsView} />
            <Tab.Screen name={"Profile"} component={ProfileView} />
        </Tab.Navigator>
    );
};

