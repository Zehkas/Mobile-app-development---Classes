import MenuButton from '@/components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const forms = () => {

    const router = useRouter()

    const volver = () => {
        router.replace('/')
    }

    const [name, setName] = useState('');
    const [city, setCity] = useState('');

    const clear = () => {
        setName('')
        setCity('')

    }

    const submit = () => {
        if (name === '' || city === ''){
            Alert.alert('Warning', 'ya', [{text: 'ya wena si'}])
        }else{
            alert('wena')
        }
    }
    

    return (
        <SafeAreaView style={{flex: 1, padding: 16, backgroundColor: '#AA' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Pressable onPress={volver}>
                    <Ionicons size={28} color='#949292' name='arrow-back-outline' />
                </Pressable>
                <Text style={styles.title}>Form</Text>
                <Text></Text>

            </View>


            <TextInput 
                onChangeText = {setName}
                placeholder = 'Name'
                style = {styles.input}
                value = {name}
            />
            <Text style = {{textAlign:'center'}}>{name}</Text>

            <TextInput 
                onChangeText = {setCity}
                placeholder = 'city'
                style = {styles.input}
                value = {city}
            />
            <Text style = {{textAlign:'center'}}>{city}</Text>

            <MenuButton text='Submit' color='#FFAABB' textColor='#0b0a0a' evento={submit} />

            <MenuButton text='Clear' color='#FFAABB' textColor='#0b0a0a' evento={clear} />



        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: '#190806',
        fontWeight: 'thin'
    },
    input:{
        borderWidth:1,
        borderColor:'#FFAA33',
        borderRadius:8,
        padding:12,
        marginVertical:8
    }
})

export default forms