import { StyleSheet, SafeAreaView, ScrollView, Dimensions, Text, View, ImageBackground, PixelRatio, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../navigation/AuthProvider'
import Button from '../components/Button'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Header from './Header'


const { width, height } = Dimensions.get('window')

const headerHeight = Math.floor(height * (8 / 100))
const themeColor = '#E90075'
const paddingHorizontal = 10


const Basket = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>

            <Header />

            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
                <Text style={styles.subHeading}>Basket</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Basket

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F6FB',
    },
    contentScroll: {
        display: 'flex',
        height: height - headerHeight,
        width: '100%',
        paddingTop: 20,
    },
    heading: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "SourceSansPro-Bold",
        marginBottom: 5,
    },
    subHeadingBold: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "SourceSansPro-SemiBold",
    },
    subHeading: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "SourceSansPro-Medium",
    },
    smTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'SourceSansPro-Regular'
    },
    regTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#000',
        fontFamily: 'SourceSansPro-Regular'
    },
    fontMedium: {
        fontFamily: 'SourceSansPro-Medium'
    },

    sliderWrapper: {
        width: '100%',
        height: 250,
    }
})