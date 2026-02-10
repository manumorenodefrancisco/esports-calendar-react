import {SafeAreaView} from "react-native-safe-area-context";
import {Image, ScrollView, Text, View} from "react-native";
import {styles} from "./HomeStyle";
import {ButtonWithIcon} from "../../../sharedComponents/ButtonWithIcon";


export const HomeView = () => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>

            {/*NOMBRE y Botón de ver carrito*/}
            <View style={{paddingTop: 20}}>
                <Text style={styles.titleView}>Tienda online</Text>
            </View>

            {/*SCROLL HORIZONTAL*/}
            <ScrollView horizontal={true}>
                <View style={styles.itemDestacado}></View>
            </ScrollView>

            {/* SCROLL VERTICAL*/}
            <ScrollView style={{paddingBottom: 20}}>
                <View style={styles.container}>
                    <View style={styles.contentContainer}>
                        <Text style={styles.titleProduct}>Título del producto 1</Text>
                        <Text style={styles.descProduct}>Descripción corta del producto</Text>
                        <View style={styles.actionContainer}>
                            <Text style={styles.priceProduct}>12.6 €</Text>
                            <ButtonWithIcon
                                text={"Comprar"}
                                fnDeOtroComponente={() => alert("Presionado")}
                                iconName={"plus"}
                            ></ButtonWithIcon>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
