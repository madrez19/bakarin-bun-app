import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Rating from '../Rating';
import Number from '../Number';
import { IcMin, IcPlus } from '../../../assets';

const ItemListFood = ({
    image,
    name,
    onPress,
    rating,
    items,
    price,
    type,
    date,
    status,
    status2,
    value,
    isCount
}) => {

    const renderContent = () => {
        switch (type) {
            case 'product':
                // item list product spt di home page
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            {/* <Number number={price} style={styles.price} /> */}
                            <Text style={styles.price}>Rp {price}</Text>
                        </View>
                        <Rating number={rating} />
                    </>
                );
            case 'order-summary':
                // item order summary
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            {/* <Number number={price} style={styles.price} /> */}
                            <Text style={styles.price}>Rp {price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>

                    </>
                );
            case 'in-progress':
                // item in progress
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            {/* <Number number={price} style={styles.price} /> */}
                            <Text style={styles.price}>{items} items. Rp {price}</Text>
                        </View>
                    </>
                );
            case 'past-orders':
                // item pas orders
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            {/* <Number number={price} style={styles.price} /> */}
                            <Text style={styles.price}>{items} items. Rp {price}</Text>
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                            <Text style={styles.status2}>{status2}</Text>
                        </View>
                    </>
                );
            default:
                //item product
                return (
                    <>
                        <View style={styles.content}>
                            <Text style={styles.title}>{name}</Text>
                            {/* <Number number={price} style={styles.price} /> */}
                            <Text style={styles.price}>Rp {price}</Text>
                        </View>
                        <Rating />
                    </>
                );
        }
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={!isCount ? onPress : null}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                {renderContent()}
                {isCount &&
                    <>
                        <TouchableOpacity onPress={() => onPress('minus')}>
                            <IcMin />
                        </TouchableOpacity>
                        <Text style={styles.value}>{value}</Text>
                        <TouchableOpacity onPress={() => onPress('plus')}>
                            <IcPlus />
                        </TouchableOpacity>
                    </>
                }
            </View>
        </TouchableOpacity>
    );
};

export default ItemListFood;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 12
    },
    content: { flex: 1 },
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#306934'
    },
    price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#8D92A3'
    },
    items: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        color: '#8D92A3',
    },
    date: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#8D92A3',
    },
    status: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#D9435E',
    },
    status2: {
        fontFamily: 'Poppins-Regular',
        fontSize: 10,
        color: '#5CB85C',
    },
    value: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginHorizontal: 10,
    },
});