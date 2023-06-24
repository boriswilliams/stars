import { StyleSheet, View } from 'react-native';
import React, {useState} from 'react';
import Matches from './matches';
import Chat from './chat'

const Contact = () => { 
    const [chatter, setChatter] = useState("");
    return (
        <View style={styles.container}>
            {chatter ? <Chat/> : <Matches/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: 'start',
    },
});

export default Contact;