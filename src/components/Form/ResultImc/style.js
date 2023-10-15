import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        marginTop: 0,
        marginBottom: 10,
        paddingTop: 20,
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },

    numberImc: {
        fontSize: 35,
        fontWeight: "bold",
    },

    information: {
        fontSize: 18,
        color: "#1dcc71",
        fontWeight: "bold",
    },

    boxShareButton: {
        width: "95%",
        alignItems: "center",
        marginBottom: 5,
    },

    shared: {
        backgroundColor: "#3e9bed",
        borderRadius: 50,
        paddingBottom: 8,
        paddingTop: 8,
        marginTop: 15,
    },

    sharedText: {
        color: "#fff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
});

export default styles;
