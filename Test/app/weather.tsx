import { useRouter } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Patalla2 = () => {

    const router = useRouter()

    const volver = () => {
        router.replace('/')
    }

    return (
        <SafeAreaView style={{ padding: 16 }}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
                <Pressable onPress={volver}>
                    <Ionicons size={28} color='#949292' name='arrow-back-outline' />
                </Pressable>
            </View>

            <View style ={{alignItems:'center'}}>
              
              <Text style = {styles.title}> Weather </Text>

              <Text> Talca, Chile</Text>

              <Ionicons size = {100} name = 'sunny-outline'/>

              <View style = {{flexDirection:'row',alignItems:'center'}}>
                <Ionicons size = {100} name = 'sunny-outline'/>
                <Text>ASDASD</Text>
                <Ionicons size = {100} name = 'sunny-outline'/>
                <Text>asjkdasjkdkasj</Text>
                <Ionicons size = {100} name = 'sunny-outline'/>

              </View>
              
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#190806',
    fontWeight: 'thin',
    padding: 16
  }
})


export default Patalla2