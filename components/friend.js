import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

let dpSize = 45;
let outerPadding = 4;

const Friend = props => { return (
    <TouchableOpacity onPress={() => props.setChatter(props.name)} style={styles.container}>
        <Image source={{ width: dpSize, height: dpSize, uri: "https://picsum.photos/"+dpSize}} style={styles.displayPicture}/>
        <View style={styles.rightText}>
            <Text style={styles.name}>{props.name}</Text>
            <Text numberOfLines={1} style={styles.message}>{props.message}</Text>
        </View>
    </TouchableOpacity>
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 3,
        shadowColor: '#000',
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        paddingLeft: outerPadding,
        paddingRight: outerPadding,
    },
    displayPicture: {
      borderRadius: dpSize,
      margin: 7,
    },
    rightText: {
        flex: 1,
        justifyContent: 'center',
        gap: 7,
        margin: 5,
    },
    name: {
        fontSize: 15,
    },
    message: {
        fontSize: 10,
    },
});

export default Friend;