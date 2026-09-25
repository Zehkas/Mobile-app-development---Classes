import { globalColors, globalMeasures } from '@/constants/theme'
import { CartContext } from '@/store/coffeeContext'
import { useRouter } from 'expo-router'
import { useContext } from 'react'
import { FlatList, Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {

    //Acceder a la variable global
    const {cart} = useContext(CartContext)
    // const context = useContext(CartContext)

    const router = useRouter()



  return (
    <SafeAreaView style = {styles.container}>

        <Pressable onPress = {() => router.replace('/products')}>
            <Text>VOLVER</Text>


        </Pressable>




      <Text>Cart List</Text>

      <FlatList 
        data ={cart}
        keyExtractor={(item) => item.id}
        renderItem={({item})=><Text>{item.title} - {item.quantity} - {item.size}</Text>}
        ListEmptyComponent={()=> <Text>Empty</Text>}
      
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:globalColors.secondary,
        padding: globalMeasures.padding,
    },
})

export default Cart