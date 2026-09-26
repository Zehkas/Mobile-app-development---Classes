import { globalColors } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'


interface Props {
    id: string,
    title: string,
    price: string,
    image: any|string
}

const CoffeeItem = (props: Props) => {

    const router = useRouter()

    const GoingToCoffeeForm = (id:string) =>{
        router.replace({pathname: '/coffeeForm', params:{id:id}})
    }

    return (
        <View style={styles.container}>
            <View style = {{flexDirection:'row', alignItems:'center', gap:20}}>
                <Image source={typeof props.image === 'string'? {uri:props.image} : props.image} style={{ height: 80, width: 80 }} />
                    <View style = {{gap:5}}>
                        <Text style= {{fontWeight:'bold', fontSize:16}}>{props.title}</Text>
                        <Text style = {{color:'rgb(139, 139, 139)'}}>${props.price}</Text>
                    </View>
            </View>
            <Pressable onPress = {() => GoingToCoffeeForm(props.id)}>
                <Ionicons name = 'arrow-forward-outline' size = {18} color ={'#8c8a8a'} />

            </Pressable>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:16,
        backgroundColor:globalColors.white,
        padding:16, 
        borderRadius:8
    }
})

export default CoffeeItem