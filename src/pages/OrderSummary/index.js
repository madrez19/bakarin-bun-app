import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy4 } from '../../assets';
import { Button, Header, ItemListFood, ItemValue } from '../../components';


const OrderSummary = ({ navigation, route }) => {
    const { item, transaction, userProfile } = route.params;

    let data = item

    return (
        <View>
            <ScrollView>
                <Header
                    title="Detail Pesanan"
                    subTitle="You deserve better meal"
                    onBack={() => navigation.goBack()}
                />
                <View style={styles.content}>
                    <Text style={styles.label}>Pesanan</Text>
                    <FlatList
                        data={data}
                        renderItem={(({ item }) => {
                            return (
                                <ItemListFood
                                    type="order-summary"
                                    name={item.product_name}
                                    price={item.subtotal}
                                    items={item.qty}
                                    image={{ uri: item.product_picture }}
                                />
                            )
                        })}

                    />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Detail Transaksi</Text>
                    <ItemValue label="Total" value={transaction.totalPrice} type="currency" />
                    {/* <ItemValue label={item.name} value={transaction.totalPrice} type="currency" /> */}
                    <ItemValue label="PickUp" value={transaction.pickUp} type="currency" />
                    <ItemValue label="Pb1 10%" value={transaction.tax} type="currency" />
                    <ItemValue
                        label="Total Harga"
                        value={transaction.total}
                        valueColor='#1ABC9C' type="currency" />
                </View>

                <View style={styles.content}>
                    <Text style={styles.label}>Penerima:</Text>
                    <ItemValue label="Nama" value={userProfile.name} />
                    <ItemValue label="No. Ponsel" value={userProfile.phoneNumber} />
                    <ItemValue label="Alamat" value={userProfile.address} />
                    <ItemValue label="No. Rumah" value={userProfile.houseNumber} />
                    <ItemValue label="Kota" value={userProfile.city} />
                </View>
                <View style={styles.button}>
                    <Button text="Lanjutkan" onPress={() => navigation.navigate('PaymentMethod', { total_payment: transaction.total })} />
                </View>
            </ScrollView>
        </View>
    );
};

export default OrderSummary;

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
        marginBottom: 10,
    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24,
        marginBottom: 24
    },
});