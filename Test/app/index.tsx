import MenuButton from '@/components/Button';
import { useRouter } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {


  const router = useRouter();

  const goPantalla1 = () => {
    router.replace('/pantalla1')
  }

  const goPantalla2 = () => {
    router.replace('/pantalla2')
  }

  const checkWeather = () => {
    router.replace('/weather')
  }

  const goForm = () => {
    router.replace('/forms')
  }

  const goflatList = () => {
    router.replace('/flatList')
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16, backgroundColor: '#AA' }}>
      <Text style={styles.titulo} >Menu Clase 01</Text>

      <MenuButton text='Pantalla 1' color='#FFAABB' textColor='#141212' evento={goPantalla1} />

      <MenuButton text='Pantalla 2' color='#FFAABB' textColor='#0b0a0a' evento={goPantalla2} />

      <MenuButton text='Check weather' color='#FFAABB' textColor='#0b0a0a' evento={checkWeather} />

      <MenuButton text='Form' color='#FFAABB' textColor='#0b0a0a' evento={goForm} />

      <MenuButton text='FlatList' color='#FFAABB' textColor='#0b0a0a' evento={goflatList} />

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#190806',
    fontWeight: 'thin'
  }
})

export default Home