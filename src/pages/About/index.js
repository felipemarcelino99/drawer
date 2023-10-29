import { View, Text, Button } from 'react-native';
import { StyleSheet } from "react-native/";

export default function About(){

    return(
        <View style={styles.container}>
            <Text>About</Text>
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