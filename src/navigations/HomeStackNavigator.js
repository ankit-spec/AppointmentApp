import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import HomeHeader from "../components/HomeHeader";

import home from "../screens/home";

const Stack = createStackNavigator()

const HomeStackNavigator = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={home} options={{header:()=> <HomeHeader/>,headerTransparent:true}} />
        </Stack.Navigator>
    )
}
export default HomeStackNavigator