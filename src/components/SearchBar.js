import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Color, Font } from '../constant'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SearchBar({ placeholderText = '', onChangeText, type= 'default' }) {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholderText}
                onChangeText={onChangeText}
                style={styles.input}
                keyboardType={type}
                placeholderTextColor={Color.DARK_COLOR}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <FontAwesome5 name="search-location" size={25} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: wp('75%'),
        height: hp(5),
        marginTop: hp(2),
    },
    input: {
        width: wp('75%'),
        height: hp(5),
        borderRadius: wp(2),
        paddingHorizontal: wp(3),
        backgroundColor: Color.WHITE_COLOR,
        fontSize: wp(4),
        fontFamily: Font.regular
    },
    icon: {
        color: Color.DARK_COLOR,
        position: 'absolute',
        right: wp(2),
    }
})