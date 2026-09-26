import AsyncStorage from '@react-native-async-storage/async-storage'
import { createContext, ReactNode, useEffect, useState } from "react"

export interface CoffeeCart {
    id: string,
    title: string,
    price: string,
    quantity: number,
    size: string,
    image: any
}

//Lo q se comparte chat

export interface CartContextType {
    cart: CoffeeCart[],
    addCoffeeToCart: (coffee: CoffeeCart) => void,
    removeCoffeeFromCart: (id: string) => void
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addCoffeeToCart: () => { },
    removeCoffeeFromCart: (id: string) => { }
})


interface Props {
    children: ReactNode
}


const CartContextProvider = ({ children }: Props) => {
    const [cart, setCart] = useState<CoffeeCart[]>([])


    useEffect (() => {
        async function saveCart(){
            await AsyncStorage.setItem("cart", JSON.stringify(cart))
        }
        saveCart()
    }, [cart])

    useEffect (() => {
        async function getCart(){
            const json = await AsyncStorage.getItem('cart')
            setCart(json != null?JSON.parse(json): [])
        }
        getCart()
    }, [])

    const addCoffeeToCart = (coffee: CoffeeCart) => {
        const coffeeFound = cart.find(c => c.id === coffee.id)
        if (coffeeFound) {
            coffeeFound.quantity += coffee.quantity

        } else {
            setCart([...cart, coffee])
        }



    }

    const removeCoffeeFromCart = (id: string) => {
        setCart(cart.filter(c => c.id !== id))
    }

    return (
        <CartContext.Provider value={{ cart, addCoffeeToCart, removeCoffeeFromCart }}>
            {children}

        </CartContext.Provider>
    )


}

export default CartContextProvider

