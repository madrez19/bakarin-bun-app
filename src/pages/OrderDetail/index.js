import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FoodDummy4 } from '../../assets';
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components';

const OrderDetail = () => {
    return (
        <ScrollView>
            <Header
                title="Pembayaran"
                subTitle="You deserve better meal"
                onBack={() => { }}
            />
            <View style={styles.content}>
                <Text style={styles.label}>Pesanan</Text>
                <ItemListFood
                    type="order-summary"
                    price="12.000"
                    label="Choco Crunchy Bun"
                    image={FoodDummy4}
                    items={2}
                />
                <Text style={styles.label}>Detail Transaksi</Text>
                <ItemValue label="Choco Crunchy Bun" value="Rp. 24.000" />
                <ItemValue label="PickUp" value="0" />
                <ItemValue label="Pb1 10%" value="Rp. 2.400" />
                <ItemValue
                    label="Total Harga"
                    value="Rp. 26.400"
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