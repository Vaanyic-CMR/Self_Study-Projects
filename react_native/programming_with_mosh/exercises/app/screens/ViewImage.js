import React from 'react';
import { StyleSheet, Platform, SafeAreaView, View, Text } from 'react-native';

function ViewImage(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View
                    style={[styles.button, {backgroundColor: "#CD6159"}]}
                ></View>
                <View
                    style={[styles.button, {backgroundColor: "#579A9E"}]}
                ></View>
            </View>
            <View style={styles.image}><Text>Image Placeholder</Text></View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 20 : 0,
        backgroundColor: "black",
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    button: {
        width: 50,
        height: 50
    },
    image: {
        backgroundColor: "#fff",
        marginTop: 75,
        width: "100%",
        height: "75%",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default ViewImage;