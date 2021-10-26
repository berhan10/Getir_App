import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'components/SplashScreen/'
import LoginScreen from 'components/LoginScreen/'
import RegisterScreen from 'components/RegisterScreen/'

export default class MainStack extends Component {
    render() {
        const Stack = createNativeStackNavigator()
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={'SplashScreen'}
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                    />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
