import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlSuccessSignUp } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessSignUp = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <IlSuccessSignUp />
            <Gap height={25} />
            <Text style={styles.title}>Selamat, Bun!</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Sekarang kamu dapat</Text>
            <Text style={styles.subTitle}>memesan roti dan minuman</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Pilih Makanan Sekarang"
                    onPress={() =>
                        navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] })
                    } />
            </View>
        </View>
    );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { fontSize: 20, fontFamily: 'Poppins-Medium', color: '#306934' },
    subTitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80,
    }
});