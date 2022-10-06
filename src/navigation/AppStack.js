import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, AppState } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/dist/Ionicons'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'

import { AuthContext } from './AuthProvider';
import HomeScreen from '../screens/HomeScreen';
import DrawerContent from '../components/DrawerContent';
import Basket from '../screens/Basket';
import Discover from '../screens/Discover';
import Portfolio from '../screens/Portfolio';
import Market from '../screens/Market';


const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const activeTabColor =
    '#E90075'
const nonActiveTabColor =
    '#7070704D'
const backgroundTabColor =
    '#fff'

const AppStack = () => {

    return (
        // <Stack.Navigator initialRouteName={"BottomTab"}>
        //     <Stack.Screen
        //         name="BottomTab"
        //         component={BottomTabNav}
        //         options={{
        //             headerShown: false,
        //         }}>
        //     </Stack.Screen>
        //     {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
        // </Stack.Navigator>
        <Drawer.Navigator initialRouteName="BottomTab"
            drawerContent={props => <DrawerContent{...props} />}
        >
            <Drawer.Screen
                name="BottomTab"
                component={BottomTabNav}
                options={{
                    headerShown: false,
                }} />
        </Drawer.Navigator>
    )
}

export default AppStack


const DrawerNavigator = ({ navigation }) => (
    <Drawer.Navigator initialRouteName="Home"
        drawerContent={props => <DrawerContent{...props} />}
    >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Market" component={Market} options={{ headerShown: false }} />
        <Drawer.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
        <Drawer.Screen name="Portfolio" component={Portfolio} options={{ headerShown: false }} />
        <Drawer.Screen name="Basket" component={Basket} options={{ headerShown: false }} />
    </Drawer.Navigator>
)

const BottomTabNav = ({ navigation }) => (
    <Tab.Navigator initialRouteName="Home"
        screenOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                // position: 'absolute',
                // elevation: 5,
                backgroundColor: backgroundTabColor,
                borderTopWidth: 1,
                borderTopColor: "#fff",
                height: 60,
            }
        }}>
        <Tab.Screen name="Home" component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="rocket-launch-outline" size={28}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialCommunityIcons>

                            <Text style={[styles.regText, {
                                color: focused ? activeTabColor : nonActiveTabColor,
                            }]}>Home</Text>
                        </View>
                    )
                },
            }} />

        <Tab.Screen name="Market" component={Market}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="storefront-outline" size={28}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialCommunityIcons>
                            <Text style={[styles.regText, {
                                color: focused ? activeTabColor : nonActiveTabColor,
                            }]}>Market</Text>
                        </View>
                    )
                },
            }} />

        <Tab.Screen name="Portfolio" component={Portfolio}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.btnWrapper}>
                            <Image source={require('../assets/images/briefcase.png')} style={styles.iconImg} />
                        </View>
                    )
                },
            }} />

        <Tab.Screen name="Discover" component={Discover}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="appstore-o" size={26}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></AntDesign>
                            <Text style={[styles.regText, {
                                color: focused ? activeTabColor : nonActiveTabColor,
                            }]}>Discover</Text>
                        </View>
                    )
                },
            }} />

        <Tab.Screen name="Basket" component={Basket}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="basket-outline" size={28}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></MaterialCommunityIcons>
                            <Text style={[styles.regText, {
                                color: focused ? activeTabColor : nonActiveTabColor,
                            }]}>Basket</Text>
                        </View>
                    )
                },
            }} />

    </Tab.Navigator>
)


const styles = StyleSheet.create({
    regText: {
        fontSize: 12,
        fontFamily: 'SourceSansPro-Regular'
    },
    btnWrapper: {
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: activeTabColor,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginTop: -40
    },
    iconImg: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
})