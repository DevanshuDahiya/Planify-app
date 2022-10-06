import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ onPress, title, width, ...rest }) => {
    return (
        <TouchableOpacity
            style={[styles.primaryBtn, { width: width ? width : '100%', ...rest }]}
            onPress={() => onPress()}>
            <Text style={styles.primaryBtnTxt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button)

const styles = StyleSheet.create({
    primaryBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        height: 46,
        backgroundColor: '#3100E9',
        borderRadius: 0,
        marginVertical: 15,
    },
    primaryBtnTxt: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
    },
})