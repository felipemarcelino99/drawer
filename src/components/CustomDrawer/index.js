import React from "react";
import { Image, Text, View } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{width: '100%', height: 85, alignItems: 'center', justifyContent: 'center', marginTop: 30}}>
                <Image source={require('../../assets/perfil.png')} style={{ width: 65, height: 65 }}/>
                <Text style={{ fontSize: 17, textAlign: 'center', color: '#000', fontWeight: 'bold', marginBottom: 35 }} >Bem-vindo</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}