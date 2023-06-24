import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Friend from './friend';

let people = [
    {name: "Bobby", message: "ya bumbaclaart pussyhole"},
    {name: "Gertrude", message: "balls"},
    {name: "Angela", message: "hello my name is angela and I'm a fairy do do doo, I need to make this really long. I guess this isn't long enough now, it needs to be really really long"},
];
//people = Array(10).fill(people).flat();

const Matches = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={people}
                renderItem={({item}) => (<Friend name={ item.name } message={ item.message }/>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#fff',
        gap: 5,
    },
});

export default Matches;