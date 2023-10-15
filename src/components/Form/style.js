import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        bottom: 0,
        backgroundColor: "#141414",
        alignItems: "center",
        marginTop: 5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },

    form: {
        width: "95%",
        height: "auto",
        marginTop: 45,
    },

    formLabel: {
        color: "#fff",
        fontSize: 20,
        paddingLeft: 15,
        marginTop: 5,
        marginBottom: 5,
    },

    input: {
        width: "100%",
        borderRadius: 50,
        backgroundColor: "#f2f0f9",
        height: 40,
        margin: 7,
        marginLeft: -0.5,
        paddingLeft: 15,
        borderWidth: 0.4,
        borderColor: "#1dcc71",
    },

    ButtonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#1dcc71",
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 5,
        marginTop: 20,
        shadowColor: "white",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },

    ButtonCalculatorBack: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        backgroundColor: "#1dcc71",
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 5,
        shadowColor: "white",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
        marginLeft: 10,
    },

    textButtonCalculator: {
        fontSize: 20,
        color: "#fff",
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 16,
    },

    exhibitionResultImc: {
        width: "90%",
        height: "50%",
    },
});

export default styles;
