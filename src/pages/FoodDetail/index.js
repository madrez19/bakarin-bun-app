import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FoodDummy6, IcBackWhite } from '../../assets';
import { Button, Counter, Number, Rating } from '../../components/';
import { getData } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FoodDetail = ({ navigation, route }) => {
    const {
        id,
        name,
        picturePath,
        description,
        ingredients,
        rate,
        price
    } = route.params;
    const [totalItem, setTotalItem] = useState(1);
    const [userProfile, setUserProfile] = useState({});

    const storage = AsyncStorage

    useEffect(() => {
        getData('userProfile').then(res => {
            setUserProfile(res);
        });
    }, []);

    const onCounterChange = (value) => {
        console.log('counter: ', value);
        setTotalItem(value);
    };

    const addToChart = async () => {
        const data = await storage.getItem("item_in_cart")

        let item_in_cart = {
            id_product: id,
            product_name: name,
            product_picture: picturePath,
            product_description: description,
            product_ingredients: ingredients,
            rating: rate,
            price: parseFloat(price),
            qty: totalItem
        }

        // storage.removeItem("item_in_cart")

        if (data == null) {
            await storage.setItem("item_in_cart", JSON.stringify([item_in_cart]))
        }
        else {
            let item = JSON.parse(data)

            let item_duplicated = item.filter((x, i) => i == item.findIndex(
                e => x.id_product == e.id_product
            ))

            const check_data_cart = item_duplicated.filter(x => x.id_product == item_in_cart.id_product)

            if (check_data_cart.length > 0) {
                const check_data_index = item_duplicated.indexOf(check_data_cart[0])

                if (check_data_index !== -1) {
                    item_duplicated[check_data_index] = item_in_cart
                    storage.setItem("item_in_cart", JSON.stringify([...item_duplicated]))
                }
            }
            else {
                await storage.setItem("item_in_cart", JSON.stringify([...item_duplicated, item_in_cart]))
            }
        }

        navigation.navigate("Order")
    }

    const onOrder = () => {
        const totalPrice = totalItem * price;
        const pickUp = 0;
        const tax = 10 / 100 * totalPrice;
        const total = totalPrice + pickUp + tax;

        const data = {
            item: {
                name: name,
                price: price,
                picturePath: picturePath
            },
            transaction: {
                totalItem: totalItem,
                totalPrice: totalPrice,
                pickUp: pickUp,
                tax: tax,
                total: total
            },
            userProfile
        };

        console.log('data for checkout: ', data);
        navigation.navigate('OrderSummary', data);
    };

    return (
        <View style={styles.page}>
            <ImageBackground source={{ uri: picturePath }} style={styles.cover}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <IcBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View>
                            <Text style={styles.title}>{name}</Text>
                            <Rating number={rate} />
                        </View>
                        <Counter onValueChange={onCounterChange} />
                    </View>
                    <Text style={styles.desc}>
                        {description}
                    </Text>
                    <Text style={styles.label}>Ingredients:</Text>
                    <Text style={styles.desc}>{ingredients}</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labelTotal}>Total Harga:</Text>
                        {/* <Number number={totalItem * price} style={styles.priceTotal} /> */}
                        <Text style={styles.priceTotal}>Rp. {totalItem * price}</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            text="Masukkan Keranjang"
                            onPress={addToChart}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default FoodDetail;

const styles = StyleSheet.create({
    page: { flex: 1 },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22,
    },
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -30,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1
    },
    mainContent: { flex: 1 },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: '#306934'
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    priceContainer: { flex: 1 },
    button: { width: 200 },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
    },
    priceTotal: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#306934',
    },
});