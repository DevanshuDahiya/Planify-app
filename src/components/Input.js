import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'

const Input = ({ height, width, error, ...rest }) => {

    return (
        <TextInput
            style={[styles.Input, { width: width ? width : '100%', height: height ? height : 50, borderColor: error ? '#FF7171' : '#ccc', }]}
            placeholderTextColor="#aaa"
            {...rest}
        ></TextInput>
    )
}

export default React.memo(Input)

const styles = StyleSheet.create({
    Input: {
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        marginBottom: 15,
        fontSize: 14,
        color: '#000',
        borderWidth: 1,
        fontFamily: "Poppins-Regular",
    },
})
