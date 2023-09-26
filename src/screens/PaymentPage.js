import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';
import { Color } from '../constant';
import { useNavigation } from '@react-navigation/native';

export default function PaymentPage() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: 'Payment'
        })
    }, [])
        

    return (
        <View style={styles.container}>
            <QRCode
                value="http://google.com"
                color={Color.DARK_COLOR}
                size={wp('70%')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.WHITE_COLOR,
    }
})