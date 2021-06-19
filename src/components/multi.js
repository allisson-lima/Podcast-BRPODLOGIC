import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default function Comp() {
    return <Text  style={Estilo.fontG}> Comp #Oficial</Text>
}
function Comp1() {
    return <Text  style={Estilo.fontG}> Comp #01</Text>
}
function Comp2() {
    return <Text  style={Estilo.fontX}> Comp #02</Text>
}
function Ali(){
    return <Image
    source={{
      uri: data.cover,
    }}
  />
        
        

}
export { Comp1, Comp2, Ali}