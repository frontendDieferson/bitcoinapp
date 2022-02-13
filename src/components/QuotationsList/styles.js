import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        width: '95%',
        height: 60,
        flexDirection: 'row',
        paddingVertical: 12,
        justifyContent: 'space-evenly',
        backgroundColor: '#2D2D2D',
        borderRadius: 10,
    },
    buttonQuery: {
        width: 65,
        height: 40,
        backgroundColor: '#3C3B3B',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonQuery: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
    },
    listQuotationBitcoins: {
        paddingTop: 10,
        width: '100%',
    },
})

export default styles;