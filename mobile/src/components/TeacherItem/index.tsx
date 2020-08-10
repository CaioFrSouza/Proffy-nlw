 import React, { useEffect, useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import asyncStorage from '@react-native-community/async-storage'

import heartOutLineIcon from '../../assets/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/icons/unfavorite.png'
import wppIcon from '../../assets/icons/whatsapp.png'

import styles from './styles'
import api from '../../services/api';

export interface TecherItemInterface {
    TecherItem:{
    name:string,
    subject:string,
    avatar:string,
    cost:string,
    wpp:string,
    bio:string,
    user_id?:number},

    proffyFavoritedsIds:boolean
}

const TeacherItem:React.FC<TecherItemInterface> = ({TecherItem, proffyFavoritedsIds}) => {
    useEffect(() => console.log(proffyFavoritedsIds), [])
 
    const [isFavorited,setFavorited] = useState(proffyFavoritedsIds) 

    async function handleToggleFavorite () {
        const favoritesItens = await asyncStorage.getItem('favorites');
        
        let favoritesArray = [];

        if(favoritesItens){
            favoritesArray = JSON.parse(favoritesItens) 
        }

        if(isFavorited){
            const favoriteIndex = favoritesArray.findIndex((techerItem:any) => {
                return techerItem.user_id === TecherItem.user_id} )
            favoritesArray.splice(favoriteIndex, 1)
            setFavorited(false)
        }else {

            favoritesArray.push(TecherItem)
            setFavorited(true)
        }

        await asyncStorage.setItem('favorites',JSON.stringify(favoritesArray))
    }

    function handleWppButtonPress () {
        const { wpp, user_id } = TecherItem
        api.post('connections',{user_id})
        return Linking.openURL(`https://api.whatsapp.com/send?phone=55${wpp}&text=Olá!`)
    }

    return (
    
    <View style={styles.container} > 

        <View style={styles.profile}>

            <Image  
                style={styles.avatar}
                source={{uri:TecherItem.avatar}}
                />

        <View style={styles.profileInfo}>

            <Text style={styles.name}>{TecherItem.name}</Text>
            <Text style={styles.subject}>{TecherItem.subject}</Text>

        </View>

        </View>

        <Text style={styles.bio}>
            {TecherItem.bio}
        </Text>

        <View style={styles.footer}>
            
            <Text style={styles.price}>
                Preço/Hora: {' '} R$:
            <Text style={styles.value}>
                {TecherItem.cost}
            </Text>

            </Text>


            <View style={styles.buttonsContainer}>

                <RectButton style={isFavorited? [styles.favoriteButton,styles.favorited]:styles.favoriteButton
                }
                onPress={handleToggleFavorite}
                >
                {isFavorited?
                    <Image source={unFavoriteIcon}/>:
                    <Image source={heartOutLineIcon}/>}
                </RectButton>

                <RectButton 
                onPress={handleWppButtonPress}
                style={styles.contactButton}>

                    <Image source={wppIcon}/>
                    <Text style={styles.contactButtonText} >Entrar em contato</Text>

                </RectButton>

            </View>

        </View>

    </View>
    
    )
}

export default TeacherItem