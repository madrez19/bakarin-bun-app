import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { setLoading, signUpAction } from '../../redux/action';
import { useForm } from '../../utils';

const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Bogor',
    });
    const dispatch = useDispatch();
    const { registerReducer, photoReducer } = useSelector((state) => state);

    const onSubmit = () => {
        const data = {
            ...form,
            ...registerReducer,
        };
        dispatch(setLoading(true));
        dispatch(signUpAction(data, photoReducer, navigation));
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.page}>
                <Header
                    title="Alamat"
                    subTitle="Make sure it's valid"
                    onBack={() => navigation.goBack()}
                />
                <View style={styles.container}>
                    <TextInput
                        label="No. Ponsel"
                        placeholder="Masukkan nomor ponsel ya, Bun!"
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="Alamat"
                        placeholder="Masukkan alamat lengkap ya, Bun!"
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)}
                    />
                    <Gap height={16} />
                    <TextInput
                        label="No. Rumah"
                        placeholder="Masukkan nomor rumah ya, Bun!"
                        value={form.houseNumber}
                        onChangeText={(value) => setForm('houseNumber', value)}
                    />
                    <Gap height={16} />
                    <Select
                        label="Kota"
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)} />
                    <Gap height={24} />
                    <Button
                        text="Daftar Sekarang"
                        onPress={onSubmit}
                    />

                </View>
            </View >
        </ScrollView >

    );
};

export default SignUpAddress;

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 7,
        flex: 1,
    },
});