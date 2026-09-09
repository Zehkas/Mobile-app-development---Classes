import { Coffee, DATA_COFFEES } from '@/store/coffee.store';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const flatList = () => {

    const router = useRouter()

    const volver = () => {
        router.replace('/')
    }

    const [coffees, setCoffees] = useState(DATA_COFFEES)
    const [selected, setSelected] = useState(0)

    const allEvent = () => {
        setCoffees(DATA_COFFEES)
        setSelected(0)
    }

    const availableEvent = () => {
        setCoffees(DATA_COFFEES.filter(item => item.available))
        setSelected(1)
    }

    const strongEvent = () => {
        setCoffees(DATA_COFFEES.filter(item => item.strong))
        setSelected(2)
    }

    const lightEvent = () => {
        setCoffees(DATA_COFFEES.filter(item => !item.strong))
        setSelected(3)
    }

    const buttons = [
        { text: 'All', evento: allEvent },
        { text: 'Available', evento: availableEvent },
        { text: 'Strong', evento: strongEvent },
        { text: 'Light', evento: lightEvent }
    ]


    return (
        <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: '#AA' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Pressable onPress={volver}>
                    <Ionicons size={28} color='#949292' name='arrow-back-outline' />
                </Pressable>
                <Text style={styles.title}>FlatList</Text>
                <Text></Text>

            </View>

            <View style={{ flexDirection: 'row', gap: 20, marginVertical: 20 }}>
                {
                    buttons.map((item, index) => (
                        <Pressable key={index} onPress={item.evento}>
                            <Text style={{ color: index == selected ? '#00CC00' : '#FF0000' }} >{item.text}</Text>
                        </Pressable>
                    ))
                }
            </View>


            <FlatList<Coffee>
                data={coffees}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text> {item.title} </Text>}
            />




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: '#190806',
        fontWeight: 'thin'
    }
})

export default flatList