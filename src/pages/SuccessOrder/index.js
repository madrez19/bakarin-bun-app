import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IlSuccessOrder } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessOrder = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <IlSuccessOrder />
            <Gap height={25} />
            <Text style={styles.title}>PESANAN-MU SEDANG KAMI BUATKAN</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Tunggu aku ya, pesanan-mu akan</Text>
            <Text style={styles.subTitle}>aku buatkan, jangan lupa pesan yang lain ya.</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button
                    text="Pesan Yang Lain"
                    onPress={() => navigation.replace('MainApp')}
                />
            </View>
            <Gap height={12} />
            <View style={styles.buttonContainer}>
                <Button
                    text="Pesanan Saya"
                    onPress={() => navigation.replace('MainApp', { screen: 'Order' })}
                    color="#8D92A3"
                />
            </View>
        </View>
    );
};

export default SuccessOrder;

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
    },
});