import { StyleSheet, SafeAreaView, ScrollView, Dimensions, Image, Text, View, ImageBackground, PixelRatio, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../navigation/AuthProvider'
import Button from '../components/Button'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Header from './Header'
import Search from './Search'
import Donut from './Donut'


const { width, height } = Dimensions.get('window')

const headerHeight = Math.floor(height * (8 / 100))
const themeColor = '#E90075'
const paddingHorizontal = 10

const HomeScreen = ({ navigation }) => {

    const CatData = [
        { id: 1, title: 'All' },
        { id: 2, title: 'Startup Up' },
        { id: 3, title: 'Early Revenue' },
        { id: 4, title: 'Ideas' },
        { id: 5, title: 'Ideas2' },
        { id: 6, title: 'Ideas3' },
    ]

    const Products = [
        {
            id: 1, title: 'Bazar India', img: require('../assets/images/bazar-india.png'), price: '70', desc: `BAZAR India is a retail chain that offers a wide range of apparel and general merchandise with latest fashion at affordable prices...`,
            tags: ['Equity', 'DMAT', 'Pvt Ltd'], percentage: 67
        },
        {
            id: 2, title: 'Madbow', img: require('../assets/images/madbow.png'), price: '60', desc: 'Madbow Ventures Limited is an Indian e-commerce lifestyle fashion brand that makes creative, distinctive fashion...',
            tags: ['CCPS', 'Physical', 'Public Ltd'], percentage: 100
        }
    ]

    const [selectedCat, setSelectedCat] = useState()
    const [searchQuery, setsearchQuery] = useState()

    return (
        <SafeAreaView style={styles.container}>

            <Header />

            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
                <Search value={searchQuery} onChangeText={setsearchQuery} />

                <ScrollView style={styles.catScroll}
                    showsHorizontalScrollIndicator={false} horizontal>
                    <View style={styles.catsRow}>
                        {CatData.map((item, index) =>
                            <TouchableOpacity key={index}
                                style={[styles.category, {
                                    backgroundColor: selectedCat === item.id ? themeColor : '#fff',
                                    borderColor: selectedCat === item.id ? themeColor : '#70707080'
                                }]}
                                onPress={() => {
                                    if (selectedCat === item.id) setSelectedCat()
                                    else setSelectedCat(item.id)
                                }}>
                                <Text style={[styles.smTxt, {
                                    color: selectedCat === item.id ? '#fff' : '#4D4F5C'
                                }]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>


                <View style={styles.section}>
                    {Products.map((item, index) =>
                        <View style={styles.cardWrapper} key={index}>

                            <View style={[styles.rowAlign, { width: '100%' }]}>
                                <View style={styles.imgWrapper}>
                                    <Image source={item.img} style={styles.logo} />
                                </View>

                                <View style={styles.detailWrapper}>
                                    <View style={[styles.rowAlign, { justifyContent: 'space-between', marginBottom: 10 }]}>
                                        <Text style={[styles.heading, { fontFamily: 'Candara_Bold', color: '#4D4F5C', }]}>{item.title}</Text>
                                        <Text style={[styles.heading, { color: '#4D4F5C', }]}> ₹{item.price}</Text>
                                    </View>
                                    <View style={styles.rowAlign}>
                                        {item.tags.map((tag, i) =>
                                            <View style={styles.tagsWrapper} key={i}>
                                                <Text style={[styles.smTxt, { color: '#707070' }]}>{tag}</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </View>

                            <Text style={[styles.regTxt, { color: '#707070', marginBottom: 5, marginTop: 15 }]}>{item.desc}</Text>

                            <View style={[styles.rowAlign, { marginVertical: 10, justifyContent: 'space-between' }]}>
                                <View>
                                    <Text style={[styles.smTxt, { color: '#707070', marginBottom: 5 }]}>To Raised</Text>
                                    <Text style={[styles.subHeadingBold, { color: '#4D4F5C', }]}>₹{'15,00,00,000'}</Text>
                                </View>
                                <View>
                                    <Text style={[styles.smTxt, { color: '#707070', marginBottom: 5 }]}>Launch Date</Text>
                                    <Text style={[styles.subHeadingBold, { color: '#4D4F5C', }]}>24 days left</Text>
                                </View>
                                <Donut percentage={item.percentage} radius={28} textColor={'#707070'} />
                            </View>

                            <View style={styles.divider} />

                            <View style={[styles.rowAlign, { marginTop: 10, justifyContent: 'space-between' }]}>
                                <View>
                                    <Text style={[styles.subHeadingBold, { color: '#4D4F5C', }]}>₹{'336,792'}</Text>
                                    <Text style={[styles.smTxt, { color: '#707070', marginBottom: 5 }]}>Raised</Text>
                                </View>
                                <View>
                                    <Text style={[styles.subHeadingBold, { color: '#4D4F5C', }]}>17.42%</Text>
                                    <Text style={[styles.smTxt, { color: '#707070', marginBottom: 5 }]}>Equity</Text>
                                </View>
                                <View>
                                    <Text style={[styles.subHeadingBold, { color: '#4D4F5C', }]}>175</Text>
                                    <Text style={[styles.smTxt, { color: '#707070', marginBottom: 5 }]}>Investors</Text>
                                </View>
                            </View>

                        </View>
                    )}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7F6FB',
        // paddingTop: 10,
        // paddingHorizontal: 10,
    },
    contentScroll: {
        display: 'flex',
        height: height - headerHeight,
        width: '100%',
        paddingTop: 20,
        paddingHorizontal: 10
    },
    section: {
        marginVertical: 20
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
    rowAlign: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    catsRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10
    },
    catScroll: {
        width
    },
    category: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: 34,
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
    },

    cardWrapper: {
        alignSelf: "center",
        display: 'flex',
        position: 'relative',
        padding: 10,
        width: '99%',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        elevation: 3,
        shadowRadius: 5,
        shadowColor: '#00000070',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },

    imgWrapper: {
        alignItems: 'center', justifyContent: 'center',
        height: PixelRatio.getPixelSizeForLayoutSize(30),
        width: PixelRatio.getPixelSizeForLayoutSize(30),
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#70707033'
    },
    logo: {
        height: PixelRatio.getPixelSizeForLayoutSize(25),
        width: PixelRatio.getPixelSizeForLayoutSize(25),
        resizeMode: 'contain',
        borderRadius: 100
    },
    detailWrapper: {
        flex: 1,
        paddingLeft: 10
    },
    tagsWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        height: PixelRatio.getPixelSizeForLayoutSize(10),
        borderRadius: 5,
        marginRight: 10,
        backgroundColor: '#70707033'
    },
    divider: {
        width: '100%',
        height: 1,
        // marginVertical:5,
        backgroundColor: '#70707033'
    }
})