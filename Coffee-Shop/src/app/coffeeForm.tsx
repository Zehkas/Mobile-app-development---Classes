import CoffeeButton from '@/Components/CoffeeButtons'
import { globalColors, globalMeasures } from '@/constants/theme'
import { CartContext, CoffeeCart } from '@/store/coffeeContext'
import { DATA_COFFEES } from '@/store/coffees.store'
import { Ionicons } from '@expo/vector-icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useContext, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CoffeeFormScreen = () => {

    //llamar a context 
    const { addCoffeeToCart } = useContext(CartContext)


    const router = useRouter()



    const { id } = useLocalSearchParams()
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState('S')

    const coffee = DATA_COFFEES.find(item => item.id === id)

    const back = () => {
        router.replace('/products')
    }

    const add = () => {
        if (quantity < 6) {
            setQuantity(quantity + 1)

        }
    }

    const substract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)

        }
    }

    const addToCart = () => {
        addCoffeeToCart({
            id: coffee?.id+'#'+size,
            title: coffee?.title,
            price: coffee?.price,
            quantity: quantity,
            size: size,
            image: coffee

        } as CoffeeCart)
        router.replace('/products')
    }






    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20, marginBottom: 30 }}>
                <Pressable onPress={back}>
                    <Ionicons name='arrow-back-outline' size={24} color={'#939b9b'} />
                </Pressable>
                <Text style={{ fontSize: globalMeasures.textSizeTitle, fontWeight: 'bold', color: globalColors.primary }}>{coffee?.title}</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <Image source={coffee?.image} style={{ height: 200, width: 200 }} />

                <Text>Q U A N T I T Y</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={substract}>
                        <Ionicons name='remove-outline' size={24} color={'#535151'} />


                    </Pressable>
                    <Text style={styles.countText}>{quantity}</Text>
                    <Pressable onPress={add}>
                        <Ionicons name='add-outline' size={24} color={'#535351'} />
                    </Pressable>


                </View>

                <Text>S I Z E</Text>

                <View style={{ flexDirection: 'row', gap: 30, marginVertical: 30 }}>

                    <Pressable
                        onPress={() => setSize('S')}

                        style={[styles.sizeButton, size === 'S' ? { backgroundColor: globalColors.primary } : null]}>
                        <Text style={[styles.colorSizeButton, size === 'S' ? { backgroundColor: globalColors.white } : null]}>S</Text>
                    </Pressable>


                    <Pressable
                        onPress={() => setSize('M')}

                        style={[styles.sizeButton, size === 'M' ? { backgroundColor: globalColors.primary } : null]}>
                        <Text style={[styles.colorSizeButton, size === 'M' ? { backgroundColor: globalColors.white } : null]}>M</Text>
                    </Pressable>


                    <Pressable
                        onPress={() => setSize('L')}

                        style={[styles.sizeButton, size === 'L' ? { backgroundColor: globalColors.primary } : null]}>
                        <Text style={[styles.colorSizeButton, size === 'L' ? { backgroundColor: globalColors.white } : null]}>L</Text>
                    </Pressable>


                </View>
                <CoffeeButton title='Add to Cart' event={addToCart} />


            </View>




        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.secondary,
        padding: globalMeasures.padding,

    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 30,
        backgroundColor: globalColors.white,
        padding: 20,
        height: 70,
        width: 70,
        textAlign: 'center',
        borderRadius: 18
    },
    sizeButton: {
        backgroundColor: globalColors.white,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8

    },
    colorSizeButton: {
        color: globalColors.primary
    }



})

export default CoffeeFormScreen