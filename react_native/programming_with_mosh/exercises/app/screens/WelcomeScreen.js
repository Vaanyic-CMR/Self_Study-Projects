import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            // source={require("../assets/splash.png")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/icon.png")}
                ></Image>
                <Text>Sell What You Don't Need</Text>
            </View>
            <View
                style={[styles.button, {backgroundColor: "#CD6159"}]}
            ><Text>Login Placeholder</Text></View>
            <View
                style={[styles.button, {backgroundColor: "#579A9E"}]}
            ><Text>Register Placeholder</Text></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "grey",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,
    },
    button: {
        width: "100%",
        height: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        backgroundColor: "#E15855",
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 75,
        alignItems: "center"
    }
})

export default WelcomeScreen;