import { StatusBar,Pressable , StyleSheet, Text, View, TextInput, Platform, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';

import {MaterialIcons} from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' translucent={true} backgroundColor="#F1F1F1" />
      <Text style={styles.heading}>Roteiros fácil</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade destino</Text>
        <TextInput
          placeholder='Ex: Toledo, PR'
          style={styles.input}
        />

        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}> 10 </Text> dias</Text>
      
        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
        />
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>
          Gerar Roteiro
        </Text>
        <MaterialIcons name='travel-explore' size={24} color='#fff'/>
      </Pressable>

      <ScrollView contentContainerStyle={{paddingBottom:24, marginTop:24,}} style={styles.containerScrool} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>Roteiro da viagem 👇</Text>
          <Text>Aqui vai ser o roteiro </Text>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    paddingTop:20,
  },
  heading:{
    fontSize:32,
    fontWeight:'bold',
    paddingTop:Platform.OS === 'android' ? statusBarHeight : 54,
  },
  form:{
    backgroundColor: '#fff',
    width:'90%',
    borderRadius:8,
    padding:16,
    marginTop:16,
    marginBottom:8,
  },
  label:{
    fontWeight:'bold',
    fontSize:18,
    marginBottom:8,
  }, 
  input:{
    borderWidth:1,
    borderRadius:4,
    borderColor:'#94a3b8',
    padding:8,
    fontSize:16,
    marginBottom:16,
  },
  days:{
    backgroundColor:'#f1f1f1',
  },
  button:{
    backgroundColor:'#ff5656',
    width:'90%',
    borderRadius:8,
    flexDirection:'row',
    padding:14,
    justifyContent:'center',
    alignItems:'center',
    gap:8,
  },
  buttonText:{
    fontSize:18,
    color:'#fff',
    fontWeight:'bold',
  },
  containerScrool:{
    width:'90%',
    marginTop:8,
  },
  content:{
    backgroundColor:'#FFF',
    padding:16,
    width:'100%',
    marginTop:16,
    borderRadius:8,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:14,
  },
});
