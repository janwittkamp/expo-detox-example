/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
    const [showText, setShowText] = useState<boolean>(false);

    return (
        <View testID="root" style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style="auto" />

            {showText && <Text style={styles.show}>SHOW</Text>}

            <TouchableOpacity
                testID="click-btn"
                onPress={() => setShowText(true)}
                style={styles.btn}
            >
                <Text>Show Text</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    show: {
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
    },
    btn: {
        marginTop: 15,
        backgroundColor: "rgba(0, 0, 0, 0.06)",
        padding: 10,
        borderRadius: 10,
    },
});
