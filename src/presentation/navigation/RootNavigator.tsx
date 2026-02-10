import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginView from "../views/auth/login/LoginView";
import RegisterView from "../views/auth/register/RegisterView";
import {NavigationContainer} from "@react-navigation/native";
import {HomeView} from "../views/app/home/HomeView";

export type RootStackParamList = {
    Login: undefined;
    Registro: undefined;
    Home: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false, animation: "default"}}
            >

                <Stack.Screen name={"Login"} component={LoginView}></Stack.Screen>
                <Stack.Screen name={"Registro"} component={RegisterView}
                              options={{
                                  headerShown: true,
                                  headerTitle: "Registrarme ahora",
                                  headerTitleAlign: "center",
                                  animation: "simple_push"
                              }}
                ></Stack.Screen>

                <Stack.Screen
                    name={"Home"}
                    component={HomeView}
                ></Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
