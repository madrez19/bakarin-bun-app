import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy1, FoodDummy3, FoodDummy4 } from '../../assets';
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components';

const OrderDetail = ({ navigation }) => {

    return (
        <ScrollView>
            <Header
                title="Pembayaran"
                subTitle="You deserve better meal"
                onBack={() => navigation.goBack()}
            />
            <View style={styles.content}>
                <Text style={styles.label}>Pesanan</Text>
                <ItemListFood
                    type="order-summary"
                    price="12.000"
                    name="Choco Crunchy Bun"
                    image={FoodDummy4}
                    items={2}
                />
                <ItemListFood
                    type="order-summary"
                    price="15.000"
                    name="Matcha Latte"
                    image={FoodDummy1}
                    items={2}
                />
                <ItemListFood
                    type="order-summary"
                    price="12.000"
                    name="Choco Taro Bun"
                    image={FoodDummy3}
                    items={2}
                />
                <Text style={styles.label}>Detail Transaksi</Text>
                <ItemValue label="Total" value="Rp. 39.000" />
                <ItemValue label="PickUp" value="0" />
                <ItemValue label="Pb1 10%" value="Rp. 3.900" />
                <ItemValue
                    label="Total Harga"
                    value="Rp.42.900"
                    valueColor='#1ABC9C' />
            </View>

            <View style={styles.content}>
                <Text style={styles.label}>Penerima:</Text>
                <ItemValue label="Nama" value="Meilinda Amin" />
                <ItemValue label="No. Ponsel" value="0812 3456 7890" />
                <ItemValue label="Alamat" value="Bogor Raya" />
                <ItemValue label="No. Rumah" value="D7 Hook" />
                <ItemValue label="Kota" value="Bogor" />
            </View>
            <View style={styles.content}>
                <Text style={styles.label}>Status Pemesanan:</Text>
                <ItemValue label="#BB251122" value="Paid" valueColor='#1ABC9C' />
            </View>
            <View style={styles.button}>
                <Button
                    text="Batalkan Pesanan"
                    onPress={() => navigation.replace('SuccessOrder')}
                    color="#D9435E" />
            </View>
            <Gap height={40} />
        </ScrollView>
    );
};

export default OrderDetail;

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
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
});