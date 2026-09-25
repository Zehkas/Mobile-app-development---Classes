import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { globalColors, globalMeasures } from '@/constants/theme'


interface Props {
    title: string,
    event: () => void

}

const CoffeeButton = (props: Props) => {
    return (
        <Pressable 
        style = {({pressed}) => [styles.buttonContainer, {opacity:pressed?0.7:1}]}
        
        onPress={props.event}>
            <Text style ={styles.buttonText} >{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
    backgroundColor:globalColors.primary,
     width:'100%',
      padding:globalMeasures.padding,
      borderRadius:8
  },
  buttonText:{
    color:globalColors.white,
     textAlign:'center',
     fontSize:18
  }

})

export default CoffeeButton