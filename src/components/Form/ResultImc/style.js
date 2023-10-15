import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        marginTop: 15,
        marginBottom: 20,
        paddingTop: 40,
        borderRadius: 50,
        alignItems: "center",
        width: "95%",
    },

    numberImc: {
        fontSize: 40,
        fontWeight: "bold",
    },

    information: {
        fontSize: 20,
        color: "#1dcc71",
        fontWeight: "bold",
    },

    boxShareButton: {
        width: "90%",
        alignItems: "center",
        marginBottom: 10,
    },

    shared: {
        backgroundColor: "#3e9bed",
        borderRadius: 50,
        paddingBottom: 5,
        paddingTop: 5,
    },

    sharedText: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
});

export default styles;
