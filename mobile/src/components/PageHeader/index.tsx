import React, { ReactNode } from 'react';
import {View, Image, Text} from 'react-native'
import {BorderlessButton} from 'react-native-gesture-handler'

import BackIcon from '../../assets/icons/back.png'
import LogoImage from '../../assets/images/logo.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title:string;
    headerRight?:ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({title, headerRight, children}) => {
    const {navigate} = useNavigation()

    function handleBackButton () {
        navigate('Lading')
    }

    return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BorderlessButton
            onPress={handleBackButton}
            > 
                <Image source={BackIcon} resizeMode={'contain'}/>
            </BorderlessButton>

            <Image resizeMode={'contain'} source={LogoImage}/>
        </View>
        <View style={styles.pageHeader}>
        <Text style={styles.title}>{ title }</Text>
        {headerRight}
        </View>

        {children}
    </View>)
}

export default PageHeader