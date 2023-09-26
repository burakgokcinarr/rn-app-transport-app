import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Color } from '../constant'
import TabView from '../screens/tabs/TabView';
import { TransportDetail, PaymentPage} from '../screens';

const Stack = createNativeStackNavigator();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.BG_COLOR,
    }
}

export default function NavigationRouter() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
                <Stack.Screen name="main" component={TabView} options={{ headerShown: false }} />
                <Stack.Screen name="transportDetail" component={TransportDetail} options={{ headerShown: true, title: '' }} />
                <Stack.Screen name="payment" component={PaymentPage} options={{ headerShown: true, title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}