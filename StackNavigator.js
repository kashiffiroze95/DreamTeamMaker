import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator>
            {/* <Stack.Screen options={{ headerShown: false }} name="AppHome" component={AppHome} />
            <Stack.Screen name="Print" component={PrintScreen} /> */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator
