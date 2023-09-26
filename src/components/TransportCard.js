import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Color, Font } from '../constant';

export default function TransportCard( { item } ) {

    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: item.color }]}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('transportDetail', { data: item })}>
                    <Text style={styles.btnText}>Select</Text>
                </TouchableOpacity>
                <Image
                    style={styles.image}
                    source={item.imagesrc}
                    contentFit="cover"
                    transition={1000}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp(2),
        backgroundColor: Color.BG_COLOR,
        marginBottom: hp(2),
        borderRadius: wp(3),
    },
    image: {
        width: wp(40),
        //aspectRatio: 1,
    },
    title: {
        fontFamily: Font.extraBold,
        fontSize: wp(7),
        color: Color.WHITE_COLOR,
        padding: wp(2),
    },
    btn: {
        backgroundColor: Color.WHITE_COLOR,
        margin: wp(2),
        borderRadius: wp(3),
        shadowColor: Color.WHITE_COLOR,
            shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
    btnText: {
        fontFamily: Font.medium,
        fontSize: wp(4),
        color: Color.DARK_COLOR,
        padding: wp(2),
    },
})