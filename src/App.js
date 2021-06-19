import React, { useEffect, useState } from 'react';
import { ScrollView,Text, View, Button, StyleSheet, ScrollText, Image } from 'react-native';
import axios from 'axios';
import Podcast from './components/fetch'

export default function App() {
  const [data, setData] = useState([]);
   useEffect(() => {
     axios.get('https://api-frontend-test.brlogic.com/podcast/details.json').then((res) => {
       setData(res.data);
     }).catch((err) => {
       alert('error');
     })
   }, []);


   
    return (
        
      <View style={styles.container}>
        <Image style={styles.image}
        source={{
          uri: data.cover
        }}
      />
        <View style={{height:'16.5%', marginTop: -120, marginBottom:0}}>
        <Text style={styles.TitleP}> Podlogic
        </Text>
            <Text style={{ paddingLeft: 25, color: '#fff', fontSize: 18, fontWeight: "bold", }}>
            6 episódios</Text>
        </View>
        <Text style={styles.FixeTitle}>LISTA DE EPISÓDIOS</Text>
      <ScrollView>
      <Podcast/>
      </ScrollView>
      
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000'
    
  },
  paragraph: {
    marginTop: 8,
    fontFamily: 'Monospace',
    
  },
  image: {
    width: 395, 
    height: 350,
    opacity: 0.8
  },
  TitleP:{ 
    paddingLeft: 12, 
    color: '#fff', 
    fontSize: 39, 
    fontWeight: "bold",
    marginTop:15,
    letterSpacing: 2,
    fontStyle: 'italic'
  },
  FixeTitle:{
    color: '#fff',
    fontSize: 8,
    letterSpacing: 5,
    paddingTop:30,
    backgroundColor: '#27657F',
    width: 800, 
    paddingLeft:25,
}
});