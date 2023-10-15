import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc({ messageResultImc, resultImc }) {
    const onShare = async () => {
        const result = await Share.share({
            message: `Meu imc hoje é: ${resultImc}`,
        });
    };

    const getImcColor = (imc) => {
        if (imc < 18.5) return "yellow";
        if (imc < 25) return "green";
        if (imc < 30) return "orange";
        return "red";
    };

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {resultImc ? (
                    <TouchableOpacity onPress={onShare} style={styles.shared}>
                        <Text style={styles.sharedText}>Enviar</Text>
                    </TouchableOpacity>
                ) : (
                    <View></View>
                )}
            </View>
            <Text style={styles.information}>{messageResultImc}</Text>
            <Text style={[styles.numberImc, { color: getImcColor(resultImc) }]}>
                {resultImc}
            </Text>
        </View>
    );
}
