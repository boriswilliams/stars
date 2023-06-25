import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const Chat = props => { return (
    <View style={styles.container}>
        <View style={styles.backBar}>
            <TouchableOpacity onPress={() => props.setChatter("")}>
                <Image source={require("../assets/backIcon.png")} style={styles.backButtom}></Image>
            </TouchableOpacity>
            <Text>{props.chatter}</Text>
        </View>
        <Text>These are your messages.</Text>
    </View>
)}

const styles = StyleSheet.create({
    container: {
    },
    backBar: {
        backgroundColor: '#eee',
        flexDirection: "row",
        alignItems: 'center',
    },
    backButtom: {
        height: 50,
        width: 50,
        margin: 5,
    },
});

export default Chat;