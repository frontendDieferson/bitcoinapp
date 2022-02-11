import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

export default function QuotationItems() {
    return (
        <View style={styles.mainContent}>
         <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
                <Image 
                style={styles.logBitcoin}
                source={require('../../../img/bitcoin.png')} />
                <Text style={styles.dayCotation}>09/02/2022</Text>
            </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53444.245</Text>
            </View>
         </View>
      
    )
}