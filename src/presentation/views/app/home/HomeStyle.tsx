import {StyleSheet, Dimensions} from "react-native";

const { width, height } = Dimensions.get("window"); //para ajustarnos a la pantalla

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
        width: width * 0.95, //95%
        height: height/3, //33%
        //width: 110,
        //height: 140,
        borderRadius: 10,
    },
});

