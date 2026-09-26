import { globalColors, globalMeasures } from '@/constants/theme'
import { CartContext } from '@/store/coffeeContext'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useContext } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Cart = () => {

    //Acceder a la variable global
    const { cart, removeCoffeeFromCart } = useContext(CartContext)
    // const context = useContext(CartContext)

    const router = useRouter()



    return (
        <SafeAreaView style={styles.container}>

            <Pressable onPress={() => router.replace('/products')}>
                <Text>VOLVER</Text>


            </Pressable>



 //https://rodev.cl/coffee-api/index.json

            <Text>Cart List</Text>

            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>

                    <Text>{item.title} - {item.quantity} - {item.size}</Text>
                    <Pressable
                    onPress ={() => removeCoffeeFromCart(item.id)}
                    
                    >
                        <Ionicons name='trash' size={20} color = {'#c4434'}/>
                    </Pressable>

                </View>
                }
                ListEmptyComponent={() => <Text>Empty</Text>}

            />

            <Text>Total ${cart.reduce((sum, c) => sum + parseFloat(c.price) * c.quantity, 0).toFixed(2)}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: globalColors.secondary,
        padding: globalMeasures.padding,
    },
})

export default Cart