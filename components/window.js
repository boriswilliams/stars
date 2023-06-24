import React from 'react';
import { View } from 'react-native';
import Contact from './contact';

const Window = props => { return (
    <View style={props.style}>
        <Contact/>
    </View>
)}

export default Window;