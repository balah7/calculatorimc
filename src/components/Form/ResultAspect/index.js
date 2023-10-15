import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function ResultAspect() {
    return (
        <View style={styles.boxAspect}>
            <Text style={styles.veryBellow}>Muito Abaixo</Text>
            <Text style={styles.bellow}>Abaixo</Text>
            <Text style={styles.normal}>Normal</Text>
            <Text style={styles.above}>Acima</Text>
            <Text style={styles.veryAbove}>Muito Acima</Text>
        </View>
    );
}
