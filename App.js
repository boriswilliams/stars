import React from 'react';
import { Platform, StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import Window from './components/window';

let topHeight = Platform.OS === 'android' ? 25 : 0;
let barHeight = 60;

export default function App() { return (
    <SafeAreaView style={styles.screen}>

        <Window style={{height: Dimensions.get('window').height-barHeight}}/>

        <View style={styles.bar}>
        </View>

    </SafeAreaView>
)}

const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        paddingTop: topHeight,
    },
    bar: {
        width: "100%",
        height: barHeight,
        backgroundColor: '#ffe74a',
        justifyContent: 'center',
    },
});