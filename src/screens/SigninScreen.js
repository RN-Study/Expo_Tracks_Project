import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';

const SignInScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext);
    return (
        <View style = { styles.container } >
            <NavigationEvents
                onWillBlur = { clearErrorMessage }
            />
            <AuthForm 
                headerText =  " Sign In to Your Account "
                errorMessage = { state.errorMessage }
                onSubmit = { signin }
                submitButtonText = "Sign In"
            />
            <NavLink 
                routeName = "SignUp"
                text = " Don't have an account? Sign Up instead! "
            />
        </View>
    );
};

SignInScreen.navigationOptions = () => {
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

export default SignInScreen;