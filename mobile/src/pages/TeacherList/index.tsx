import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import { ScrollView, BorderlessButton, RectButton, FlatList } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import AsyncStorege from '@react-native-community/async-storage'
import {Picker} from '@react-native-community/picker'

import TeacherItem from '../../components/TeacherItem';
import PageHeader from '../../components/PageHeader';

import styles from './styles'
import {Week_days,subjects} from '../../services/slectorsForPickers'
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList = () => {
    const [filtersVisible,setFiltersVisible] = useState(false)
    const [teachers,setTeachers] = useState([])
    const [favorites,setFavorites] = useState<number[]>([])

    const [subject,setSubject] = useState('');
    const [week_day,setWeek_day] = useState('');
    const [time,setTime] = useState('')

    
    function loadFavorites() {
        AsyncStorege.getItem('favorites').then(response => {
            if(response){
                const favoritedTechers = JSON.parse(response)
                const favoritedTechersIds = favoritedTechers.map((iten:{id:string}) => iten.id)
                setFavorites(favoritedTechersIds)
            }
        })
    }
    useFocusEffect(
        React.useCallback(() => {
            loadFavorites();
        }, [])
      )

    
    function handleToggleFormVisble () {
        return setFiltersVisible(!filtersVisible)
    }

    async function handleFiltersSubmit () {
        const response = await api.get('classes',{
            params:{
                subject,
                week_day,
                time 
            }
        })

        const {data} = response
        setTeachers(data)
    }

    return (
        <View>
            <ScrollView>
    <KeyboardAvoidingView style={styles.container}>
    
        <PageHeader 
        title={'Proffy disponiveis'} 
        
        headerRight={(
        <BorderlessButton
        onPress={handleToggleFormVisble}
        >

            <Feather 
                name={'filter'} 
                size={20} 
                color={'#fff'} 
                ></Feather>

        </BorderlessButton>)} > 

        {filtersVisible && 
        
            (<View style={styles.TeacherForm}>

                <Text style={styles.label}>Matéria</Text>
                <Picker 
                selectedValue={subject}
                onValueChange={(val:any) => setSubject(val)} 
                style={styles.input}
                
                >
                    {subjects.map(value => <Picker.Item key={value.value} label={value.label} value={value.value} ></Picker.Item>)}
                    </Picker>

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana</Text>
                    <Picker 
                        selectedValue={week_day}
                        onValueChange={(val:any) => setWeek_day(val)} 
                        style={styles.input}
                        >
                        {Week_days.map(value => <Picker.Item key={value.value} label={value.label} value={value.value} ></Picker.Item>)}
                    </Picker>
                    </View>

                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horario</Text>
                        <TextInput 
                        value={time}
                        onChangeText={text => setTime(text)}
                        placeholderTextColor={"#c1bccc"}
                        placeholder={ 'Qual horario ?' }
                        style={styles.input}
                        />
                    </View>
                </View>
                    <RectButton 
                    onPress={handleFiltersSubmit}
                    style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                
            </View>)}
        
        </PageHeader>

        <FlatList
        data={teachers}
        keyExtractor={(item:any) => item.user_id} 
        renderItem={({item}) => <TeacherItem 
        key={item.user_id}
        proffyFavoritedsIds={favorites.includes(item.user_id)}
        TecherItem={item} />}
        style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal:16,
            paddingBottom:16
        }}
        />

    </KeyboardAvoidingView>
        </ScrollView>
        </View>
    )
};

export default TeacherList;