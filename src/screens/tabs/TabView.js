import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage, ProfilePage, LocationPage } from '../';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Color, Font } from '../../constant';

const Tab = createBottomTabNavigator();

export default function TabView() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'home') {
                        return <Ionicons name="home" size={size} color={color} />
                    } else if (route.name === 'profile') {
                        return <FontAwesome name="user" size={size} color={color} />
                    } else if (route.name === 'location') {
                        return <Ionicons name="md-location" size={size} color={color} />
                    } 
                },
                tabBarActiveTintColor: Color.BG_COLOR,
                tabBarInactiveTintColor: Color.DARK_COLOR,
                headerShown: false,
                //tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Color.WHITE_COLOR,
                    borderTopWidth: 0
                }
            })}
        >
            <Tab.Screen name="home" component={HomePage} options={{tabBarLabel: 'Home', tabBarLabelStyle: {fontSize: 13, fontFamily: Font.medium}}}/>
            <Tab.Screen name="profile" component={ProfilePage} options={{tabBarLabel: 'Profile', tabBarLabelStyle: {fontSize: 13, fontFamily: Font.medium}}}/>
            <Tab.Screen name="location" component={LocationPage} options={{tabBarLabel: 'Location', tabBarLabelStyle: {fontSize: 13, fontFamily: Font.medium}}}/>
        </Tab.Navigator>
    )
}