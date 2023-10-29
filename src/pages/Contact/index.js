import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native/";

export default function Contact(){

    return(
        <View style={styles.container}>
            <Text>Contact</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});