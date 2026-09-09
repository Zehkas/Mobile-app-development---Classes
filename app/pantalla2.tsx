import { useRouter } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Patalla2 = () => {

    const router = useRouter()

    const volver = () => {
        router.replace('/')
    }

    return (
        <SafeAreaView style={{ padding: 16, flex: 1 }}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                <Pressable onPress={volver}>
                    <Ionicons size={28} color='#949292' name='arrow-back-outline' />
                </Pressable>
                <Text>Pantalla2</Text>
                <Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default Patalla2