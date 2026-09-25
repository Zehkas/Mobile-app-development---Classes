import CoffeeItem from '@/Components/CoffeeItem'
import { globalColors, globalMeasures } from '@/constants/theme'
import { DATA_COFFEES } from '@/store/coffees.store'
import { Ionicons } from '@expo/vector-icons'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SelectCoffeeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginBottom:30}}>
        <Text style = {{fontSize:globalMeasures.textSizeTitle}}>How do you like your coffee?</Text>
        <Pressable style = {styles.cartButton}>
          <Ionicons size = {24} name = 'cart-outline' color = {globalColors.white}/>

        </Pressable>




      </View>

      <FlatList
        data = {DATA_COFFEES}
        keyExtractor={(Coffee)=> Coffee.id}
        renderItem={({item})=> <CoffeeItem
                                 title ={item.title}
                                 price = {item.price}
                                 id = {item.id}
                                 image = {item.image}/>}
      

      
      
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:globalColors.secondary,
      padding:globalMeasures.padding
  },
  cartButton:{
    backgroundColor:globalColors.action,
    padding:8,
    borderRadius:20

  }
  
})

export default SelectCoffeeScreen