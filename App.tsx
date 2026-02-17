import {AppNavigator} from "./src/presentation/navigation/RootNavigator";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {StyleSheet} from "react-native";

export default function App() {
    return(
        <GestureHandlerRootView style={styles.container}>
            <AppNavigator />
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});