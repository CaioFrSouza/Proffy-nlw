import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator}  from '@react-navigation/stack'

import LadingPage from '../pages/Lading'
import GiveClassesPage from '../pages/giveClasses'
import StudyTabs from './StudyTabs';

const {Navigator,Screen} = createStackNavigator();


const AppStack = () => {
    return (
    <NavigationContainer>

        <Navigator screenOptions={{ headerShown:false }}>
            
            <Screen component={LadingPage} name={'Lading'}/>
            <Screen component={GiveClassesPage} name={'GiveClasses'}/>
            <Screen component={StudyTabs} name={"StudyTabs"} />

        </Navigator>

    </NavigationContainer>)
}

export default AppStack