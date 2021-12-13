import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from "react-native-vector-icons/Feather";
import Catalog from '../src/pages/Catalog';
import 'react-native-gesture-handler';
import Header from '../src/components/Header';
import Cart from "../src/pages/Cart";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: true,
                    cardStyle: {backgroundColor: "#313746"},
                }}
                initialRouteName={"catalog"}
            >
                <Stack.Screen
                    name={"catalog"}
                    component={Catalog}
                    options={{
                        title: 'Catalogo',
                        headerTitleAlign: 'center',
                        headerShown: true,
                        headerTransparent: true,
                        headerTitle: () => <Header/>
                    }}
                />

                <Stack.Screen
                    name={"Cart"}
                    component={Cart}
                    options={{
                        title: 'Cart',
                        headerTitleAlign: 'center',
                        headerShown: true,
                        headerTransparent: true,
                        headerBackTitleVisible: false,
                        headerLeftContainerStyle: {
                            marginLeft: 20
                        },
                        headerBackImage: () => (
                            <FeatherIcon name={"chevron-left"} size={24} color={"#f3f9ff"}/>
                        ),

                        headerTitle: () => <Header/>
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
