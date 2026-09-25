import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalColors, globalMeasures } from '@/constants/theme'
import CoffeeButton from '@/Components/CoffeeButtons'
import { useRouter } from 'expo-router'

const Home = () => {


  const router = useRouter();

  const goingtoSelectScreen = () =>{
    router.push('/products')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/images/logo.webp')}
        style={{ height: 200, width: 200, marginBottom: 30 }} />

      <Text style={{ fontSize: 36, fontWeight:'bold', color:globalColors.primary }}>Brew day</Text>
      <Text style={{ fontSize: 12 }}>How do you like your coffee?</Text>
      <CoffeeButton title = 'Enter Shop' event = {goingtoSelectScreen}/>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: globalMeasures.padding,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: globalColors.secondary,
    gap: 20
  }
})

export default Home