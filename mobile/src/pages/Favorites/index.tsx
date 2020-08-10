import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import AsyncStorege from '@react-native-community/async-storage'

import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { TecherItemInterface } from '../../components/TeacherItem';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

const Favorites = () => {
    const [favorites,setFavorites] = useState<any>([])

    function loadFavorites() {
        AsyncStorege.getItem('favorites').then(response => {
            if(response){

                const favoritedTechers = JSON.parse(response)
                setFavorites(favoritedTechers)
                
            }
        })
    }
    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

    return (<View style={styles.container}>
        <PageHeader title={'Meus proffys favoritos '}/>
        <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16
        }}
        >
        <FlatList
        data={favorites}
        keyExtractor={(item:any) => item.user_id} 
        renderItem={({item}) => {
            console.log(item.user_id)
            return  <TeacherItem 
            key={item.user_id}
            proffyFavoritedsIds
            TecherItem={item} />}
        }
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16
        }}
        />

        </ScrollView>

    </View>
    )
};

export default Favorites;