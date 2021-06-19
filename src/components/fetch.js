import React, {Component} from 'react'
import { ScrollView,View, StyleSheet, Text, FlatList, Image } from 'react-native'



export default class Podcast extends Component{
    constructor() {
        super()
        this.state = {
            dataSource: []
        }
    }
    renderItem = ({ item }) => {
        return(
           
        <View style={{display:'flex', flexDirection: 'row', width: '100%'}}>
          
            <Image style={style.image}
            source={{ uri: item.cover }}/>

            <View style={{marginTop: 14}}> 
                <Text style={{fontSize:14, color: 'white', width: 250}}>
                    Episodeo {item.episodeNumber} - {item.name}
                </Text>
                
                <Text style={{fontSize:12, color: 'white', opacity:0.6, marginTop:5}}>
                    {item.duration}
                </Text>
            </View>
        </View>
          
        )  
    }

    componentDidMount() {
        const url = 'https://api-frontend-test.brlogic.com/podcast/details.json'
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                dataSource: responseJson.episodes
            })
        })
        .catch((error) =>{
            console.log(error)
        })
    }

    render() {
        return (
            <View style={style.App}>
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={this.renderItem}
                />
                
            </View>
        )
    }
}



const style = StyleSheet.create({
    App: {
        
        backgroundColor: '#27657F',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: '100%',
    },
    image:{
        width: 80, 
        height: 80, 
        marginBottom: 10, 
        borderRadius: 5, 
        marginRight:10
    },
    
})