import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import { Color, Font } from '../constant';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Entypo } from '@expo/vector-icons';
import { SCHEDULE_DATA } from '../dummy/Data';
import {ScheduleCard} from '../components';

export default function TransportDetail() {

    const navigation = useNavigation();
    const route      = useRoute();
    const { data }   = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: data.name
        })
    }, [])

    return (
        <View style={[styles.container, { backgroundColor: data.color }]}>
            <StatusBar style='dark'/>
            <View style={{height: wp(10), alignItems: 'center'}}>
                <Image
                    style={styles.image}
                    source={data.imagesrc}
                    contentFit="contain"
                    transition={1000}
                />
            </View>
            <View style={styles.contentView}>
                <View style={styles.card}>
                     {/* From to Card Component */}
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.fromTo}>
                            <Entypo name="location-pin" size={30} color={Color.BG_COLOR} />
                            <View style={styles.verticleLine}></View>
                            <Entypo name="location-pin" size={30} color={Color.GREEN_COLOR} />
                        </View>
                        <View style={{justifyContent: 'space-between', marginLeft: wp(5),}}>
                            <Text style={styles.text}>From</Text>
                            <Text style={styles.subText}>Lorem Bus Station</Text>
                            <View style={styles.horizontalLine}></View>
                            <Text style={styles.text}>To</Text>
                            <Text style={styles.subText}>Dolor Bus Station</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.scheduleText}>Choose Schedule</Text>
                <FlatList
                    data={SCHEDULE_DATA}
                    renderItem={({ item }) => <ScheduleCard item={item }/> }
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: wp(5)}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contentView: {
        flex: 1,
        backgroundColor: Color.WHITE_COLOR,
        marginTop: hp(10),
        borderTopLeftRadius: wp(15),
        borderTopRightRadius: wp(15),
        padding: wp(5),
    },
    title: {
        fontFamily: Font.medium,
        fontSize: hp(4),
        color: Color.WHITE_COLOR,
        textAlign: 'center',
    },
    image: {
        width: wp(100),
        height: 100,
    },
    card: {
        padding: wp(5),
        backgroundColor: Color.WHITE_COLOR,
        shadowColor: "#000000",
            shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
    verticleLine: {
        height: wp(15),
        width: 1,
        backgroundColor: Color.DARK_COLOR
    },
    horizontalLine: {
        borderWidth: 0.5,
        width: wp(50),
        borderColor:Color.GRAY_COLOR,
    },
    fromTo: {
        justifyContent: 'center', 
        width: wp(10),
        alignItems: 'center',
        marginLeft: wp(2),
    },
    text: {
        fontFamily: Font.medium,
        fontSize: hp(1.5),
        color: Color.GRAY_COLOR,
    },
    subText: {
        fontFamily: Font.medium,
        fontSize: hp(2),
        color: Color.DARK_COLOR
    },
    scheduleText: {
        fontFamily: Font.extraBold,
        fontSize: hp(3),
        color: Color.DARK_COLOR,
        marginTop: hp(2),
    },
});