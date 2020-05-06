import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style = {styles.container}>
            <NavigationEvents onWillBlur = {clearErrorMessage} />
            <AuthForm
                headerText = " Sign Up for Tracker "
                errorMessage = { state.errorMessage }
                submitButtonText = " Sign Up "
                onSubmit = {signup}
            />
            <NavLink 
                routeName = "SignIn"
                text = " Already have an account? Sign In instead! "
            />
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
    return {
        header: null
    };
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SignUpScreen;