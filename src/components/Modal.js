import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, StyleSheet} from 'react-native';
import { Modal } from 'react-native';

import Hearder from './header'
import Img from './image-header'

export default () => {

    return (
       
        <Modal   >

            <View style={{ backgroundColor: 'red',  height: 264}}><Img/></View>

            <View style={{ backgroundColor: '#27657F', flex: 1, height: 276}}>
                
                   <Hearder/>


                    
                </View>
           
           <View style={{ backgroundColor: '#15475B',  height: 126}}></View>

        </Modal>
        
    );
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#27657F',
        flex: 1, 
        height: 100
    }

});