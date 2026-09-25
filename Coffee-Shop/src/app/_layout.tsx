import { View, Text } from 'react-native'
import { Slot } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <View style = {{flex: 1}}>
      <Slot />
    </View>
  )
}

export default RootLayout