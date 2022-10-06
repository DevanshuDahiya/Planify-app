import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

const Splash = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Animatable.Text animation="zoomInUp" iterationCount={1} duration={1000} delay={100}
                style={styles.logo}>
                    Test App
            </Animatable.Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    logo: {
        fontSize:24,
        color:'#000',
        fontFamily:'Roboto-Bold'
    },
})
