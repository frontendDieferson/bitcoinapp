import React from "react";
import { Text, Image, SafeAreaView, View, TouchableOpacity } from "react-native";
import styles from "./styles";



export default function Preload({ navigation }) {
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Image source={require('../../../src/img/logo.png')} />
        </View>
        <View>
            <TouchableOpacity 
            style={styles.loginGoogle}
            onPress={() => navigation.navigate('Home')}
            > 
                <Image source={require('../../../src/img/google.png')} />
               <Text style={styles.loginTextGoogle}> Login com o Google</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}