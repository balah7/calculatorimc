import React from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Vibration,
    Pressable,
    Keyboard,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";
import ResultAspect from "../Form/ResultAspect/";

export default function Form() {
    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [messageImc, setMessageImc] = React.useState(
        "Preencha o peso e altura",
    );
    const [imc, setImc] = React.useState(null);
    const [textButton, setTextButton] = React.useState("Calcular");
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [heightPlaceholder, setHeightPlaceholder] =
        React.useState("Ex. 1.80");
    const [weightPlaceholder, setWeightPlaceholder] =
        React.useState("Ex. 71.283");

    let heightFormart = height?.replaceAll(",", ".");
    let weightFormart = weight?.replaceAll(",", ".");

    const imcCalculator = () => {
        let totalImc = (
            weightFormart /
            (heightFormart * heightFormart)
        ).toFixed(2);

        setImc(totalImc);
    };

    const verificationImc = () => {
        if (imc == null) {
            Vibration.vibrate(165);
            setErrorMessage("valor inválido*");
        }
    };

    const validationImc = () => {
        if (
            !weight ||
            !height ||
            isNaN(weightFormart) ||
            isNaN(heightFormart) ||
            weight == 0 ||
            height == 0
        ) {
            verificationImc();
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura corretamente");
        } else {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual:");
            setTextButton("Calcular Novamente");
            setErrorMessage(null);
            setHeightPlaceholder(`Ex. ${heightFormart}`);
            setWeightPlaceholder(`Ex. ${weightFormart}`);
        }
    };

    return (
        <View style={styles.formContext}>
            {imc == null ? (
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder={heightPlaceholder}
                        placeholderTextColor="#7e7a80"
                        keyboardType="numeric"
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder={weightPlaceholder}
                        placeholderTextColor="#7e7a80"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </Pressable>
            ) : (
                <View style={styles.exhibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <ResultAspect />
                    <TouchableOpacity
                        style={styles.ButtonCalculatorBack}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

function generateUniqueId() {
    const timestamp = new Date().getTime(); // Obtém o timestamp atual
    const random = Math.floor(Math.random() * 1000); // Gera um número aleatório entre 0 e 999
    return `${timestamp}-${random}`;
}
