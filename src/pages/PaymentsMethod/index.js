import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FoodDummy4 } from '../../assets';
import { Button, Header, ItemListFood, ItemValue } from '../../components';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

let dataPayment = [
    {
        bank_name: "Debit/Credit Card",
        icon: require("../../assets/Dummy/Debit.png")
    },
    {
        bank_name: "Bank Transfer",
        icon: require("../../assets/Dummy/BCA.png")
    },
    {
        bank_name: "E Wallet",
        icon: require("../../assets/Dummy/E-Wallet.png")
    },
]


const PaymentMethod = ({ navigation, route }) => {
    const { total_payment } = route.params;

    const [selectPaymentMethod, setSelectPaymentMethod] = useState("")

    const storage = AsyncStorage

    const currencyFloat = (number) => {
        let num = parseFloat(number)
        if (!isNaN(num)) {
            if (num.toString().indexOf('.') != -1) {
                return 'Rp ' + num.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
            } else {
                var rupiah = '';
                var numrev = num.toString().split('').reverse().join('');
                for (var i = 0; i < numrev.length; i++) if (i % 3 == 0) rupiah += numrev.substr(i, 3) + '.';

                let ret = rupiah.split('', rupiah.length - 1).reverse().join('')

                if (ret < 0) {
                    return '- Rp ' + ret.replace('-', '')
                } else {
                    return 'Rp ' + ret
                }
            }
        } else {
            return 0
        }
    }

    return (
        <View>
            <Header
                title="Pembayaran"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.content}>
                <Text style={styles.label}>Total</Text>
                <Text style={[styles.title, { color: 'black' }]}>{currencyFloat(total_payment)}</Text>
            </View>

            <View style={styles.content}>
                <Text style={[styles.title2, { color: 'black' }]}>Metode Pembayaran</Text>
                <View style={{ marginBottom: 15 }} />
                <View style={styles.line} />
                <View style={{ marginBottom: 25 }} />
                <View>
                    <FlatList
                        data={dataPayment}
                        renderItem={(({ item }) => {
                            return (
                                <TouchableOpacity style={styles.viewBtn} onPress={() => setSelectPaymentMethod(item)}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={item.icon} style={{ width: 65, height: 35, marginRight: 20 }} />
                                        <Text style={[styles.label, { width: 200, color: 'black', alignItems: 'flex-start', marginBottom: 0 }]}>{item.bank_name}</Text>
                                    </View>
                                    <View style={[styles.dot, { backgroundColor: item == selectPaymentMethod ? "#020202" : "#D9D9D9" }]} />
                                </TouchableOpacity>
                            )
                        })}
                    />
                </View>
                <View style={{ marginBottom: 15 }} />
                {/* <Text style={styles.label}>Detail Transaksi</Text> */}
            </View>
            <View style={styles.button}>
                <Button text="Bayar Sekarang" onPress={() => {
                    navigation.replace('SuccessOrder')
                    storage.removeItem("item_in_cart")
                }} />
            </View>
        </View >
    );
};

export default PaymentMethod;

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 10
    },
    label: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#306934',
        marginBottom: 8,
    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24,
    },
    title: { fontSize: 24, fontFamily: 'Poppins-Medium', color: '#306934' },
    title2: { fontSize: 18, fontFamily: 'Poppins-Regular', color: '#306934' },
    line: {
        width: '100%',
        height: '0.1%',
        borderWidth: 0.5,
        borderColor: 'black',
        // borderStyle: 'dotted'
    },
    viewBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center'
    },
    dot: {
        width: 15,
        height: 15,
        backgroundColor: '#020202',
        borderRadius: 15
    }
});