import React, { Fragment } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import styles from './styles'

export default function QuotationsList() {

    return(
        <Fragment>

        <View style={styles.filters}>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
                <Text style={styles.textButtonQuery}>7 Dias</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
                <Text style={styles.textButtonQuery}>15 Dias</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
                <Text style={styles.textButtonQuery}>1 Mês</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
                <Text style={styles.textButtonQuery}>3 Meses</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>{}}
            >
                <Text style={styles.textButtonQuery}>6 Meses</Text>
            </TouchableOpacity>
        </View>
        <ScrollView>

        </ScrollView>

        </Fragment>
    )
}