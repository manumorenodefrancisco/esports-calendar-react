import {StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({

    titleView: {
        position: "absolute",
        bottom: 20,
        left: 20,
        fontSize: 36,
        fontWeight: "bold",
        color: "white",
        textShadowColor: "rgba(0, 0, 0, 0.6)",
    },
    image: {
        width: width,
        height: height * 0.35,
    },
});

