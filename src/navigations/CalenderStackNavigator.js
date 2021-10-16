import { createStackNavigator } from "@react-navigation/stack";
import calendar from "../screens/calendar";
import React from 'react'
import CalenderHeader from "../components/CalenderHeader";


const Stack = createStackNavigator()

const CalenderStackNavigator = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="calendar" component={calendar} options={{header:()=><CalenderHeader/>,headerTransparent:true}} />
        </Stack.Navigator>
    )
}
export default CalenderStackNavigator;