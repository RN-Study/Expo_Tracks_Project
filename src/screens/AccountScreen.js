import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../components/Spacer';
import { Context as AuthContext } from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';


const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset = {{ top: "always" }} >
            <Text style = {styles.label }> Account Screen </Text>
            <Spacer>
                <Button title = "Sign Out" onPress = {signout} />
                </Spacer>
        </SafeAreaView>
    );
};

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20}/>
};

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        textAlign: "center",
        // marginTop: 50,

    }
});

export default AccountScreen;