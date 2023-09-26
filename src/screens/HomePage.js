import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Color, Font } from '../constant';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SearchBar, TransportCard } from '../components';
import { DATA } from '../dummy/Data';

export default function HomePage() {

    const [text, setText] = useState('');

    const renderItem = ({ item }) => <TransportCard item={item}/>

    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            { /* Header Component */  }
            <SafeAreaView style={styles.header}>
                <View>
                    <Text style={styles.title}>Hello,</Text>
                    <Text style={styles.name}>Burak Gökçınar</Text>
                </View>
                <Image
                    style={styles.profile}
                    source="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    contentFit="cover"
                    transition={1000}
                />
            </SafeAreaView>

            { /* SearchBar Component */  }
            <SearchBar placeholderText='Search...' onChangeText={setText} type='default'/>

            { /* Content View */   }
            <View style={styles.contentView}>
                { /* Balance View */   }
                <View style={styles.balanceView}>
                    <View>
                        <Text style={styles.text}>Balance</Text>
                        <Text style={styles.text}>$20</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Rewards</Text>
                        <Text style={styles.text}>$10.25</Text>
                    </View>
                    <View>
                        <Text style={styles.text}>Total Trips</Text>
                        <Text style={styles.text}>$35</Text>
                    </View>
                </View>

                <View style={styles.transportView}>
                    <Text style={styles.subText}>Choose your Transport</Text>

                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        style={{marginTop: wp(5)}}
                    />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp(5),
    },
    title: {
        fontFamily: Font.extraBold,
        fontSize: hp(4),
        color: Color.WHITE_COLOR
    },
    name: {
        fontFamily: Font.regular,
        fontSize: hp(3),
        color: Color.WHITE_COLOR
    },
    profile: {
        width: wp(12),
        height: wp(12),
        borderRadius: wp(3),
    },
    contentView: {
        flex: 1,
        backgroundColor: Color.WHITE_COLOR,
        marginTop: hp(10),
        borderTopLeftRadius: wp(15),
        borderTopRightRadius: wp(15),
    },
    transportView: {
        flex: 1,
        margin: wp(6),
    },
    balanceView: {
        width: wp('80%'),
        height: hp(10),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: -wp(10),
        padding: wp(2),
        borderRadius: wp(2),
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
    text: {
        fontSize: wp(4),
        fontFamily: Font.extraBold,
        color: Color.DARK_COLOR,
        textAlign: 'center'
    },
    subText: {
        fontSize: wp(5),
        fontFamily: Font.extraBold,
        color: Color.DARK_COLOR
    }
});