import {StyleSheet} from "react-native";


export const styles = StyleSheet.create({
    titleView: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },

    itemDestacado: {
      width:  200,
      height: 200,
    },

    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#efefef",
        borderRadius: 10,
        width: "95%",
        alignSelf: "center",
        gap: 15,
        justifyContent: "space-around",
    },
    imageContainer: {
        borderRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: 110,
        height: 140,
        borderRadius: 10,
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
        gap: 10
    },
    titleProduct: {
        fontWeight: "bold",
        fontSize: 20,
    },
    descProduct: {
        color: "#757575",
    },
    actionContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        alignItems: "flex-end",
    },
    priceProduct: {
        fontWeight: "bold",
        fontSize: 18,
    }
});

