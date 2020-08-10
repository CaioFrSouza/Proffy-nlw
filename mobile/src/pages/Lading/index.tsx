import React, { useState, useEffect } from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

import { useNavigation } from '@react-navigation/native'

import { RectButton, ScrollView } from 'react-native-gesture-handler'

import landingPage from '../../assets/images/landing.png'
import studyIcon from '../../assets/icons/study.png'
import giveClassesIcon from '../../assets/icons/giveClasses.png'
import heartIcon from '../../assets/icons/heart.png'
import api from '../../services/api'

const Lading = () => {

    const [totalConnections,setTotalConnections] = useState(0)

    useEffect(() =>{
        api.get('connections').then(res => {
            const {data} = res
            setTotalConnections(data.total)
        })
    },[])

    const {navigate} = useNavigation()

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPage () {
        navigate('StudyTabs')
    }

    return (
        
        <View 
        style={styles.container}>
        
            <ScrollView style={{width:'100%',height:'100%'}}>
        <Image 
            style={styles.banner}
            source ={landingPage} 
        />

        <Text style={styles.title}>
            Seja bem-vindo, {'\n'}
            <Text style={styles.titleBold} >O que deseja fazer?</Text>
            
        </Text>
        
        <View style={styles.buttonsContainer}>
            <RectButton 
                onPress={handleNavigateToStudyPage}
                style={[styles.button,styles.buttonPrimary]}> 
                <Image source={studyIcon}/>
                <Text style={styles.buttonTitle}>Estudar</Text>
            </RectButton>

            <RectButton
                onPress={handleNavigateToGiveClassesPage}
                style={[styles.button,styles.buttonSecondary]}> 
                <Image source={giveClassesIcon}/>
                <Text style={styles.buttonTitle}>Dar aulas</Text>
            </RectButton>

        </View>
        <Text style={styles.totalConnections}>
            Total de {totalConnections} conexões já realizadas {' '}
            <Image source={heartIcon}/>
        </Text>

    </ScrollView>
    </View>
    
    )
}

export default Lading