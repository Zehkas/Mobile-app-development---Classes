import { Pressable, StyleSheet, Text } from 'react-native'


interface Props {
    text:string,
    color:string,
    textColor:string,
    evento: () => void
}

const MenuButton = (props: Props) => {
    return (
        <Pressable
            onPress={props.evento}
            style={({ pressed }) => [
                styles.button,
                pressed ? { opacity: 0.7 } : { opacity: 1 },
                {backgroundColor:props.color},
            ]}>
                <Text style = {[{color:props.textColor}, styles.text]}> {props.text} </Text>
        </Pressable>

    )
}


const styles=StyleSheet.create({
    button:{
        textAlign:'center',
        marginVertical:16,
        padding:16,
        borderRadius:8
    },
    text:{
        textAlign: 'center'
    }
})

export default MenuButton