import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlEmptyOrder } from '../../../assets';
import { Button, Gap } from '../../atoms';

const EmptyOrder = () => {
    return (
        <View style={styles.page}>
            <IlEmptyOrder />
            <Gap height={25} />
            <Text style={styles.title}>KAMU LAPAR, YA?</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Jangan lupa pesan ya</Text>
            <Text style={styles.subTitle}>nanti kamu sakit</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button text="Pesan Sekarang" onPress={() => navigation.replace('MainApp')} />
            </View>
        </View>
    );
};

export default EmptyOrder;

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