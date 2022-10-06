import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View, PixelRatio, TouchableOpacity } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Fantisto from 'react-native-vector-icons/dist/Fontisto'
import { AuthContext } from '../navigation/AuthProvider'


const primaryColor = '#67016F'
const fontSize = 24

const DrawerContent = (props) => {

    const { navigation } = props

    const { userToken } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.userContent}>
                    <View style={[styles.rowAlign, { backgroundColor: primaryColor, paddingHorizontal: 10, paddingVertical: 15 }]}>
                        <Text style={[styles.subHeadingBold, { color: '#fff' }]}>Products</Text>
                        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
                            <MaterialIcons name="close" color={'#fff'} size={fontSize} />
                        </TouchableOpacity>
                    </View>
                </View>
                <DrawerItem
                    style={{ height: 45, borderBottomWidth: 1, borderBottomColor: '#70707033' }}
                    labelStyle={{ fontFamily: "SourceSansPro-SemiBold",color:'#4D4F5C' }}
                    icon={({ color, size, focused }) => (
                        <MaterialCommunityIcons name="rocket-launch-outline" color={'#4D4F5C'} size={fontSize} />
                    )}
                    label="Sell Your Startup"
                    onPress={() => { navigation.navigate('Portfolio') }}>
                </DrawerItem>
                <DrawerItem
                    style={{ height: 45, borderBottomWidth: 0, borderBottomColor: '#70707033' }}
                    labelStyle={{ fontFamily: "SourceSansPro-SemiBold",color:'#4D4F5C' }}
                    icon={({ color, size, focused }) => (
                        <MaterialCommunityIcons name="storefront-outline" color={'#4D4F5C'} size={fontSize} />
                    )}
                    label="Private Boutique"
                    onPress={() => { navigation.navigate('Market') }}>
                </DrawerItem>
                
            </DrawerContentScrollView>

            {/* <DrawerItem
                // style={{ borderBottomWidth: 0, borderBottomColor: '#fff' }}
                labelStyle={{ fontFamily: "SourceSansPro-SemiBold", }}
                icon={({ color, size }) => (
                    <MaterialCommunityIcons name="exit-to-app"
                        color={color}
                        size={fontSize} />
                )}
                label="Sign Out"
                onPress={() => { }}
            >
            </DrawerItem>
            <Text style={styles.version}>Version 1.0</Text> */}
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    userContent: {
        alignItems: 'center',
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
        fontFamily: "SourceSansPro-SemiBold",
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
    fontSemiBold: {
        fontFamily: 'SourceSansPro-SemiBold'
    },

    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },


    version: {
        fontSize: 12,
        color: '#ccc',
        marginLeft: 20,
        fontFamily: "SourceSansPro-SemiBold",
        // textAlign:'center'
    }
})
