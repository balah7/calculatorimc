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
        paddingTop: 18,
        marginTop: 5,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },

    form: {
        width: "95%",
        height: "auto",
    },

    formLabel: {
        color: "#fff",
        fontSize: 20,
        paddingLeft: 20,
        marginBottom: 6,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f2f0f9",
        height: 42,
        margin: 7,
        paddingLeft: 15,
        marginLeft: 8,
        borderWidth: 0.4,
        borderColor: "#1dcc71",
    },

    ButtonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#1dcc71",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginTop: 10,
        elevation: 5,
        shadowColor: "white",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },

    textButtonCalculator: {
        fontSize: 21,
        color: "#fff",
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
});

export default styles;
