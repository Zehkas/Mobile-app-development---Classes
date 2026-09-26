import CoffeeItem from '@/Components/CoffeeItem'
import { globalColors, globalMeasures } from '@/constants/theme'
import { CartContext } from '@/store/coffeeContext'
import { Coffee } from '@/store/coffees.store'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useContext, useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SelectCoffeeScreen = () => {

  const router = useRouter()
  const {cart} = useContext(CartContext)

  //estado del coffee para almacenar la data de la api
  const [listCoffee, setListCoffee] = useState<Coffee[]>([])

  //obtener los cafes desde una api
  useEffect(() => {
    async function getCoffees(){
      const resp = await fetch('https://rodev.cl/coffee-api/index.json')
      const data = await resp.json()
      setListCoffee(data)
    }
    getCoffees()
  }, [])

  
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <Text style={{ fontSize: globalMeasures.textSizeTitle }}>How do you like your coffee?</Text>
        <Pressable
          onPress={() => router.replace('/cart')}
          style={styles.cartButton}>
          <Ionicons size={24} name='cart-outline' color={globalColors.white} />

          <View style = {{position:'absolute', right:0}} >
            <Text style = {{fontWeight:'bold'}} >{cart.length}</Text>
          </View>

        </Pressable>




      </View>

      <FlatList
        data={listCoffee}
        showsVerticalScrollIndicator={false}
        keyExtractor={(Coffee) => Coffee.id}
        renderItem={({ item }) => <CoffeeItem
          title={item.title}
          price={item.price}
          id={item.id}
          image={item.image} />}




      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.secondary,
    padding: globalMeasures.padding
  },
  cartButton: {
    backgroundColor: globalColors.action,
    padding: 8,
    borderRadius: 20

  }

})

export default SelectCoffeeScreen