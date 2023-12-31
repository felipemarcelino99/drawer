import React from "react";
import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native/";
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    function navegaSobre() {
        navigation.navigate('About');
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir para About" onPress={ navegaSobre } />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});