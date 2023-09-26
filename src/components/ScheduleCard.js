import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Color, Font } from '../constant';
import { Ionicons } from '@expo/vector-icons';

export default function ScheduleCard({ item }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.timeView}>
                    <Ionicons name="time-outline" size={24} color={Color.DARK_COLOR} />
                    <Text style={styles.text}> {item.departuretime} </Text>
                    <Ionicons name="ios-swap-horizontal" size={24} color="black" />
                    <Text style={styles.text}> {item.arrivaltime}</Text>
                </View>
                <View style={styles.timeView}>
                    <Ionicons name="location-sharp" size={24} color={Color.BLUE_COLOR}/>
                    <Text style={styles.text}> {item.name}</Text>
                </View>
                <View style={styles.horizontalLine}></View>
            </View>
            <View>
            <Text style={styles.text}>$ {item.price}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('payment', { selected: item })}>
                    <Text style={styles.buyText}>Buy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
    },
    timeView: {
        flexDirection: 'row',
        marginTop: hp(2),
    },
    text: {
        fontFamily: Font.medium,
        fontSize: wp(5),
        color: Color.DARK_COLOR,
        textAlign: 'center',
    },
    horizontalLine: {
        borderWidth: 0.6,
        width: wp(50),
        borderColor:Color.GRAY_COLOR,
        marginTop: hp(1),
    },
    btn: {
        padding: wp(2),
        borderRadius: wp(2),
        marginTop: hp(1),
        backgroundColor: Color.GREEN_COLOR
    },
    buyText: {
        fontFamily: Font.regular,
        fontSize: wp(5),
        color: Color.WHITE_COLOR,
        textAlign: 'center',
    }
})