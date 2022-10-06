import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Feather from 'react-native-vector-icons/dist/Feather'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

const headerHeight = Math.floor(height * (8 / 100))

const themeColor = '#0A3A67'

const Header = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <View style={[styles.rowAlign, { width: width / 2.5 }]}>
                <TouchableOpacity style={styles.menuBtnWrapper}
                    onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name='menu' size={headerHeight / 2} color={'#4D4F5C'} />
                </TouchableOpacity>
                <View style={styles.imgWrapper}>
                    <Image source={require('../assets/images/planify-logo.png')} style={styles.logo} />
                </View>
            </View>
            <View style={[styles.rowAlign, { width: width / 2.2, justifyContent: 'space-between' }]}>
                <TouchableOpacity style={styles.btnWrapper}>
                    <MaterialIcons name='call' size={headerHeight / 2.5} color={'#4D4F5C'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWrapper}>
                    <MaterialIcons name='search' size={headerHeight / 2.5} color={'#4D4F5C'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnWrapper}>
                    <MaterialIcons name='notifications-none' size={headerHeight / 2.5} color={'#4D4F5C'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.imgBtnWrapper}>
                    <Image source={require('../assets/images/robo.webp')} style={styles.userImg} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
        maxWidth: '80%',
        color: '#7E134B',
        fontFamily: "Poppins-Bold",
        marginVertical: 15,
        marginBottom: 50,
    },
    subHeadingBold: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "Poppins-SemiBold",
    },
    subHeading: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "Poppins-Medium",
    },
    smTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'Poppins-Regular'
    },
    regTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#000',
        fontFamily: 'Poppins-Regular'
    },
    fontMedium: {
        fontFamily: 'Poppins-Medium'
    },

    header: {
        width: '100%',
        height: headerHeight,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 3,
        shadowColor: '#0007',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgWrapper: {
        height: headerHeight / 2,
        width: '70%',
        // width:width/4,
        // borderWidth: 1
    },
    logo: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    menuBtnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        // width: '25%',
        height: headerHeight - 20,
        // borderWidth: 1
    },
    btnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: headerHeight - 20,
        // borderWidth: 1
    },
    imgBtnWrapper: {
        width: headerHeight - 20,
        height: headerHeight - 20,
        borderRadius: headerHeight - 20
    },
    userImg: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        borderRadius: headerHeight - 20
    },
})