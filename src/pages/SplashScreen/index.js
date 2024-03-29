import React, { useEffect } from "react";
import { View } from "react-native";
import { Logo } from "../../assets";
import { getData } from "../../utils";

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            getData('token').then(res => {
                console.log('token: ', res);
                if (res) {
                    navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
                } else {
                    navigation.replace('SignIn');
                }
            });
        }, 2000);
    }, []);

    return (
        <View style={{
            backgroundColor: '#306934',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Logo />
        </View >

    );
};

export default SplashScreen;