import * as React from "react";
import * as RN from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
    return(
        <>
            <RN.Text>this is the home screen welcome</RN.Text>
            <RN.Button title="go to add" onPress={ () => navigation.navigate('Add')}/>
        </>
    );
}