import React, { useEffect, useState } from 'react';
import { ScrollView,Text, View, Button, StyleSheet, Image, Modal } from 'react-native';
import axios from 'axios';


export default function app() {
  const [data, setData] = useState([]);
   useEffect(() => {
     axios.get('https://api-frontend-test.brlogic.com/podcast/episodes/1059/details.json').then((res) => {
       setData(res.data);
     }).catch((err) => {
       alert('error');
     })
   }, []);


    return (
        
      <View style={styles.container}>
          <Image style={{height:'100%'}}
          source={{ uri: data.cover }}/>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    
    
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
    paddingLeft:25
}
});