import React, { Fragment } from "react";
import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import QuotationItems from "./QuotationItems";

import styles from './styles'

export default function QuotationsList(props) {
    const daysQuery = props.filterDay
    return(
        <Fragment>

        <View style={styles.filters}>
            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>daysQuery(7)}
            >
                <Text style={styles.textButtonQuery}>7 Dias</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>daysQuery(15)}
            >
                <Text style={styles.textButtonQuery}>15 Dias</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>daysQuery(30)}
            >
                <Text style={styles.textButtonQuery}>1 Mês</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>daysQuery(90)}
            >
                <Text style={styles.textButtonQuery}>3 Meses</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.buttonQuery}
            onPress={() =>daysQuery(180)}
            >
                <Text style={styles.textButtonQuery}>6 Meses</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.listQuotationBitcoins}>
            <FlatList 
               data={props.listTransactions}
               renderItem={({ item }) => {
                   return <QuotationItems valor={item.valor} data={item.data} />
               }}
            
            
            />

        </ScrollView>

        </Fragment>
    )
}