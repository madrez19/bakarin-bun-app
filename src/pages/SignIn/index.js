import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Gap, Header, TextInput } from '../../components';
import { getData, useForm } from '../../utils';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/action/auth';
import { setLoading } from '../../redux/action/global';

const SignIn = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(signInAction(form, navigation));

    };

    return (
        <View style={styles.page}>
            <Header title="Masuk" subTitle="Find your best ever bun" />
            <View style={styles.container}>
                <TextInput
                    label="Email"
                    placeholder="Masukkan email ya, bun!"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Password"
                    placeholder="Masukkan password ya, bun!"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={24} />
                <Button text="Masuk"
                    onPress={onSubmit}
                />
                <Gap height={12} />
                <Button
                    text="Daftar"
                    color="#8D92A3"
                    textColor="white"
                    onPress={() => navigation.navigate('SignUp')}
                />
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 7,
        flex: 1,
    }
});