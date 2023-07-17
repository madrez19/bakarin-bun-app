import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../components';
import { useForm } from '../../utils';
import { launchImageLibrary } from 'react-native-image-picker';
import { showMessage } from 'react-native-flash-message';
import { useState } from 'react';

const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log('form: ', form);
        dispatch({ type: 'SET_REGISTER', value: form });
        navigation.navigate('SignUpAddress')
    };
    const addPhoto = () => {
        let options = {

            mediaType: 'photo',
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        };

        launchImageLibrary(options, response => {
            console.log('Response = ', response);

            if (response.didCancel || response.errorCode) {
                showMessage('Anda tidak memilih foto');
            } else {
                const source = { uri: response.uri };
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName,
                };

                setPhoto(source);
                dispatch({ type: 'SET_PHOTO', value: dataImage });
                dispatch({ type: 'SET_UPLOAD_STATUS', value: true });
            }
        },
        );
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.page}>
                <Header title="Daftar" subTitle="Register and eat" onBack={() => navigation.goBack()} />
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <TouchableOpacity onPress={addPhoto}>
                            <View style={styles.borderPhoto}>
                                {photo ? (
                                    <Image source={photo} style={styles.photoContainer} />
                                ) : (
                                    <View style={styles.photoContainer}>
                                        <Text style={styles.addPhoto}>Add Photo</Text>
                                    </View>
                                )}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        label="Nama"
                        placeholder="Masukkan nama panjang ya, bun!"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap height={16} />
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
                    <Button
                        text="Lanjutkan"
                        onPress={onSubmit}
                    />

                </View>
            </View >
        </ScrollView >

    );
};

export default SignUp;

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 7,
        flex: 1,
    },
    photo: { alignItems: 'center', marginTop: 20, marginBottom: 16, },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110, height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addPhoto: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center',
    },
});