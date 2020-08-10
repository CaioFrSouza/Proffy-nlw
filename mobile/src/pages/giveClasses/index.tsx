import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png' 

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

const GiveClasses = () => {

  const navigation = useNavigation()

  function GoBack () {
    navigation.goBack()
  }

  return (
  <View style={styles.container} >

    <ImageBackground resizeMode='contain' style={styles.content} source={giveClassesBackgroundImage}>
        
        <Text style={styles.title}>Quer ser um Proffy ?</Text>
        <Text style={styles.description}>Para começar você precisa de cadastrador com professor na nossa plataforma web</Text>
        
    </ImageBackground>
    
    <RectButton 
      onPress={GoBack}
      style={styles.okButton}>
      <Text style={styles.okButtonText}>Tudo bem</Text>
    </RectButton>
    
  </View>)
}

export default GiveClasses;