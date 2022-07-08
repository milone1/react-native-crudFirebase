import * as React from "react";
import * as RN from 'react-native';

export default function Add() {
    return(
        <RN.View style={styles.container}>
            <RN.Text>This</RN.Text>
        </RN.View>
    );
}

const styles = RN.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    }
})